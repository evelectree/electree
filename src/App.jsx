import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logo.svg";
import Cover from "./assets/cover.jpg";
import CityImage from "./assets/city.jpg";
import AppstoreImage from "./assets/app-store.png";
import PlaystoreImage from "./assets/playstore.png";
import ContactImage from "./assets/contact.jpg";
import AkshayImage from "./assets/akshay.jpg";
import SuhailImage from "./assets/suhail.jpg";
import axios from "axios";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Partner With us", href: "#partner" },
];

function App() {
  const section1Ref = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // function to submit form data to airtable using airtable api and fetch

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const fullName = formData.get('fullName');
    // const phone = formData.get('phone');
    // const email = formData.get('email');
    // const message = formData.get('message');

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${
          process.env.VITE_APP_AIRTABLE_BASE_ID
        }/Contacts`,
        {
          fields: {
            Name: formData.fullName,
            Phone: formData.phone,
            Email: formData.email,
            Message: formData.message,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${
              process.env.VITE_APP_AIRTABLE_API_KEY
            }`,
            "Content-Type": "application/json",
          },
        }
      );
      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
      console.log("Data saved to Airtable:", response.data);
      // Add your logic here for success message or redirect after form submission
    } catch (error) {
      console.error("Error saving data to Airtable:", error);
      // Add your logic here for displaying an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Electree</span>
              <img className="h-20 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <section>
        <div className="relative">
          <img
            src={Cover}
            className="absolute inset-0 object-cover w-full h-full lg:h-screen"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75 lg:h-screen">
            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Provide seemless access to all
                    <br className="xl:hidden" />
                    <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                      {" "}
                      Charging Stations
                    </span>
                  </h1>
                  <h3 className="mt-20 mb-4 text-3xl text-white dark:text-white">
                    Coming soon on
                  </h3>
                  <div className="flex justify-center items-center">
                    <div className="flex items-center">
                      <img
                        src={AppstoreImage}
                        alt="App Store"
                        className="w-12 mr-4"
                      />
                      <div className="h-10 w-1 bg-white"></div>{" "}
                      {/* White divider */}
                      <img
                        src={PlaystoreImage}
                        alt="Play Store"
                        className="w-12 ml-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={CityImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Join our network of
                <span className="sm:block"> 1200+EV Charging Stations </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Electree provides seamless access to all charging stations
                nationwide, making your electric journeys a breeze. Get ready to
                experience hassle-free charging and unstoppable freedom on the
                road
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="">
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 xl:px-32 h-screen">
            <div className="mb-32 text-center">
              <h2 className="mb-16 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Meet our Team
              </h2>
              <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                Meet our passionate founders, graduates of Delhi School of
                Economics, who are dedicated to kickstarting the EV revolution
                in India. Their dream is to eradicate pollution and transform
                India into a greener, cleaner nation by 2035. The dynamic duo's
                mission is to make electric vehicles accessible and affordable
                for everyone in India. Their goal is to create an influential
                change, driving individuals to choose electric vehicles over
                traditional gasoline-powered automobiles.
              </p>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-2">
              <div className="space-y-6 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                  src={SuhailImage}
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Suhail Gulati</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                  src={AkshayImage}
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Akshay Bhatnagar</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Operations Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Explore the common questions and answers about our product
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How does EV Charging Network work?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  We connect users to the nearest EV charging stations and offer
                  exclusive deals through our app!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  Which financial services do you offer?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  We provide microfinancing options for purchasing EVs and
                  installing charging stations at homes and businesses.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  Do you provide access all public charging stations?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Yes, we provide access to all public charging stations who
                  have partnered with us.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How do I find EV charging stations?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Simply download our app and use the interactive map to find
                  nearby EV charging stations in an instant!
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Didn’t find the answer you are looking for?{" "}
                <a
                  href="#partner"
                  title=""
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#partner");
                    section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                >
                  Contact our support
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="partner"
        className="min-h-screen bg-[url('./assets/contact.jpg')] bg-cover bg-center"
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Partner with us
                </h1>

                <p className="max-w-xl mt-6">
                  Ready to electrify the world? Let’s embark on this
                  eco-adventure together and give your business the charge it
                  needs. Our platform offers a charging station aggregator for
                  all EVs and a unique microfinance option to help you with your
                  electric car purchase.
                  <br></br>
                  Partner with us today!!
                </p>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                    Contact Us
                  </h1>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love to hear from you
                  </p>

                  <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Phone
                      </label>
                      <input
                        type="Phone"
                        name="phone"
                        placeholder="9191919191"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      get in touch
                    </button>
                  </form>
                  {submitted && (
                    <p>
                      Data submitted! Someone from our team will contact you
                      soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Electree</span>
                  <img className="h-20 w-auto" src={logo} alt="" />
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023. Electree EV Solutions Pvt Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
