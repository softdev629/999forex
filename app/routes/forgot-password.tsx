import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forgot Password" },
    { name: "description", content: "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in." },
  ];
}

const formSchema = z.object({
  email: z.string().email(),
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
});

const ForgotPassword = () => {
  const [formType, setFormType] = useState<"email" | "oldPassword">("email");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-yellow-gradient">
      <section>
        <div className="pt-14 pb-60 px-5">
          <div className="bg-red-radial md:w-1/4 mx-auto rounded-2xl px-7 py-14">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
              Forgot Password
            </h3>
            <p className="mt-2 text-center text-white">
              <span className="text-yellow-gradient">
                Please enter your email address
              </span>
              <br />
              Or
              <br />
              Please enter your old password
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter Email"
                          {...field}
                          className={`bg-[#33333369] border-[#171717] text-white rounded-2xl mt-4 ${
                            formType !== "email" ? "hidden" : ""
                          }`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter Old Password"
                          {...field}
                          className={`bg-[#33333369] border-[#171717] text-white rounded-2xl mt-4 ${
                            formType !== "oldPassword" ? "hidden" : ""
                          }`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter New Password"
                          {...field}
                          className={`bg-[#33333369] border-[#171717] text-white rounded-2xl mt-4 ${
                            formType !== "oldPassword" ? "hidden" : ""
                          }`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {formType === "email" ? (
                  <Button
                    className="w-full mt-5 bg-red-gradient border border-[#F5CC1C] hover:bg-[#4A010F] text-white rounded-2xl py-6"
                    onClick={() => setFormType("oldPassword")}
                  >
                    Send Password
                  </Button>
                ) : (
                  <>
                    <Button
                      className="w-full mt-5 bg-red-gradient border border-[#F5CC1C] hover:bg-[#4A010F] text-white rounded-2xl py-6"
                      type="submit"
                    >
                      Reset Password
                    </Button>
                  </>
                )}
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
