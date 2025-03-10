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
import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "~/components/ui/checkbox";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signup" },
    { name: "description", content: "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in." },
  ];
}

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  referralCode: z.string().optional(),
  terms: z.boolean(),
});

const Signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
      terms: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="pt-14 pb-60 px-5 bg-yellow-gradient">
      <section>
        <div className="bg-red-radial md:w-1/4 mx-auto rounded-2xl px-7 py-14">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
            Signup to 999.forex
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          placeholder="Full Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          placeholder="Telephone (Ex: +1 or +44)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referralCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Referral Code
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#33333369] border-[#171717] text-white rounded-2xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-white">
                        I agree to terms & conditions.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="w-full bg-red-gradient border border-[#F5CC1C] hover:bg-[#4A010F] text-white rounded-2xl py-6"
                type="submit"
              >
                Signup
              </Button>
              <p className="text-sm text-white text-center">
                Already have an account? Please{" "}
                <Link to="/login" className="text-primary">
                  Sign in
                </Link>{" "}
                here.
              </p>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
