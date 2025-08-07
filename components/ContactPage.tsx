  "use client";

  import { useState } from "react";
  import { motion } from "framer-motion";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import { Mail, MapPin, Phone, Send } from "lucide-react";
  import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  export default function ContactPage() {
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      message: "",
    });
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    };

    function validateForm(formData: FormData) {
      const name = formData.get("name")?.toString().trim();
      const email = formData.get("email")?.toString().trim();
      const message = formData.get("message")?.toString().trim();

      const newErrors = {
        name: !name ? "Name is required." : "",
        email:
          !email || !/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/.test(email)
            ? "Valid email is required."
            : "",
        message:
          !message || message.length < 30
            ? "Message must be at least 30 characters long."
            : "",
      };

      setErrors(newErrors);
      return !newErrors.name && !newErrors.email && !newErrors.message;
    }

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();

     const form = e.currentTarget;
     const formData = new FormData(form);

     if (!validateForm(formData)) {
       if (errors.message) toast.error(errors.message);
       else if (errors.name) toast.error(errors.name);
       else if (errors.email) toast.error(errors.email);
       return;
     }

     try {
       const response = await fetch("https://formspree.io/f/xldlojga", {
         method: "POST",
         headers: {
           Accept: "application/json",
         },
         body: formData,
       });

       if (response.ok) {
         toast.success("Message sent successfully!");
         setTimeout(() => {
           window.location.href = "/thank-you"; 
         }, 1500);
       } else {
         toast.error("Something went wrong. Please try again.");
       }
     } catch (error) {
       toast.error("Failed to send message. Please check your internet.");
     }
   }


    return (
      <>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Get In Touch
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Have questions, suggestions, or just want to say hello?
                We&apos;d love to hear from you. Fill out the form or reach out
                through our social channels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-8"
              >
                <motion.div
                  variants={item}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Location
                    </h3>
                    <p className="text-muted-foreground">Gaza, Palestine</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:lama2015678@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      lama2015678@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">+972 59 785 7788</p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="pt-8">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/LamaAli4"
                      target="_blank"
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/lamaemad.ali/"
                      target="_blank"
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lama-emad-ali-8a60942a5/"
                      target="_blank"
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50"
              >
                <motion.div
                  variants={item}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      required
                      className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      className="w-full py-6 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
