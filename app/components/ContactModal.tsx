"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReactDOM from 'react-dom';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useModal } from '../context/ContactModalContext';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  carModel: z.string().min(1, "Car model is required"),
  service: z.string().min(1, "Service is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d+$/, "Invalid phone number")
    .min(1, "Phone number is required"),
});

type FormData = z.infer<typeof schema>;

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    const templateParams = {
      name: data.name,
      carModel: data.carModel,
      service: data.service,
      email: data.email,
      phone: data.phone,
    };

    emailjs
      .send(
        "service_11ntbxf",
        "template_4kl9k1i",
        templateParams,
        "EsF3RFgIXAYlWt30r"
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success(
            "Email sent successfully! We will contact you as soon as possible!"
          );
          closeModal();
        },
        (err) => {
          setLoading(false);
          toast.error("Failed to send email. Please try again later!");
          console.log("FAILED TO SEND EMAIL...", err);
        }
      );
  };

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white max-h-[90%] overflow-auto p-6 rounded-xl shadow-lg w-auto relative">
        <button onClick={closeModal} className="absolute top-2 right-4 hover:text-gray-500 text-[30px]">&times;</button>
        <div className="flex flex-col gap-[30px]">
          <div>
            <p className="uppercase text-primary font-bold text-[24px]">Book here</p>
            <span className="uppercase text-primary text-[20px]">Fill this form for reservation</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            <div>
              <input
                type="text"
                placeholder="name"
                {...register("name")}
                className={`input !py-[4px] !px-[16px] !text-[20px]  ${errors.name ? "border-red-500" : ""} `}
              />
              {errors.name && (
                <p className="text-red-500 text-[12px] pl-5 pt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="car model"
                {...register("carModel")}
                className={`input !py-[4px] !px-[16px] !text-[20px]  ${errors.carModel ? "border-red-500" : ""}`}
              />
              {errors.carModel && (
                <p className="text-red-500 text-[12px] pl-5 pt-1">
                  {errors.carModel?.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="service"
                {...register("service")}
                className={`input !py-[4px] !px-[16px] !text-[20px]  ${errors.service ? "border-red-500" : ""}`}
              />
              {errors.service && (
                <p className="text-red-500 text-[12px] pl-5 pt-1">
                  {errors.service?.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="email"
                {...register("email")}
                className={`input !py-[4px] !px-[16px] !text-[20px]  ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-[12px] pl-5 pt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="phone"
                {...register("phone")}
                className={`input !py-[4px] !px-[16px] !text-[20px]  ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-[12px] pl-5 pt-1">
                  {errors.phone?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn mt-2 max-w-[200px] !bg-black !text-white hover:!bg-accent hover:!text-black !px-5 !py-1.5 disabled:bg-gray-500"
              disabled={loading}
            >
              {loading ? "Sending..." : "Confirm"}
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
