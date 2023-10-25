import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logo.svg";
import Cover from "./assets/cover.jpg";
import CityImage from "./assets/city.jpg";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Partner With us", href: "#" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
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
                  <h3 className="mt-20 mb-2 text-3xl text-white dark:text-white">
                    Coming soon on
                  </h3>
                  <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="#" className="">
                      <svg
                        className="mr-3 w-7 h-7"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="apple"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#fff"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        ></path>
                      </svg>
                      {/* <div className="text-left">
					<div className="mb-1 text-xs">Download on the</div>
					<div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div> */}
                    </a>
                    <a href="#" className="">
                      <svg
                        className="mr-3 w-6 h-6"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google-play"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#fff"
                          d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                        ></path>
                      </svg>
                      {/* <div className="text-left">
					<div className="mb-1 text-xs">Get in on</div>
					<div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
				</div> */}
                    </a>
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
      <section className="">
        <div className="py-20 bg-gray-50 h-screen">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-32 text-center">
              <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
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
                  src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Sohail</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
              <div className="space-y-6 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Akshay</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Operations Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
