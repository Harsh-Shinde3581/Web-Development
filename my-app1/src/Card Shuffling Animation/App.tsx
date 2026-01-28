import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import logoImage from "../assets/logo.png";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl relative">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
          <div className="flex">
            {/* Left Side - Sign In Form */}
            <div className="w-1/2 p-8">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-8">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="w-32 h-auto"
                  />
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Sign in
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      className="w-full mt-1"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      className="w-full mt-1"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="text-right">
                    <a
                      href="#"
                      className="text-blue-500 text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Login
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Circular Animated Cards */}
            <div className="w-1/2 relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {/* Card 1 - Blue - Primary circular motion */}
              <motion.div
                className="absolute top-1/2 right-12 w-[26rem] h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl p-8 transform -translate-y-1/2"
                animate={{
                  x: [0, -150, -300, -400, -300, -150, 0],
                  y: [0, -30, -50, 0, 50, 30, 0],
                  rotate: [0, -5, -10, -15, -10, -5, 0],
                  zIndex: [3, 2, 1, 1, 1, 2, 3],
                  scale: [1, 0.95, 0.85, 0.8, 0.85, 0.95, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1, // 1 second delay
                }}
              >
                <div className="text-white h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={logoImage}
                      alt="Logo"
                      className="w-24 h-auto"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Welcome to Compserv
                  </h3>
                  <p className="opacity-95 leading-snug flex-grow">
                    Compserv helps developers to build
                    consistent and well coded dashboards full of
                    beautiful and rich modules. Our platform
                    provides comprehensive tools for modern
                    development teams to create exceptional user
                    experiences.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Pink/Red - Secondary circular motion */}
              <motion.div
                className="absolute top-1/2 right-12 w-[26rem] h-80 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-xl p-8 transform -translate-y-1/2"
                animate={{
                  x: [0, -150, -300, -400, -300, -150, 0],
                  y: [0, 30, 50, 0, -50, -30, 0],
                  rotate: [0, 5, 10, 15, 10, 5, 0],
                  zIndex: [1, 1, 2, 3, 2, 1, 1],
                  scale: [0.8, 0.85, 0.95, 1, 0.95, 0.85, 0.8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4, // 1 second delay + 3 second offset for opposite motion
                }}
              >
                <div className="text-white h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={logoImage}
                      alt="Logo"
                      className="w-24 h-auto"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Welcome to Compserv
                  </h3>
                  <p className="opacity-95 leading-snug flex-grow">
                    Build modern applications that inspire
                    through seamless integration of BWays
                    Solutions. We enable functions and websites
                    to turn complete challenges into
                    opportunities for growth and innovation
                    through cutting-edge technology and
                    intelligent automation.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Purple - Third circular motion */}
              <motion.div
                className="absolute top-1/2 right-12 w-[26rem] h-80 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl shadow-xl p-8 transform -translate-y-1/2"
                animate={{
                  x: [0, -120, -240, -360, -240, -120, 0],
                  y: [0, -40, -60, 0, 60, 40, 0],
                  rotate: [0, -3, -6, -9, -6, -3, 0],
                  zIndex: [2, 1, 1, 2, 3, 2, 2],
                  scale: [
                    0.9, 0.88, 0.82, 0.85, 0.95, 0.92, 0.9,
                  ],
                  opacity: [0.8, 0.7, 0.6, 0.7, 0.9, 0.85, 0.8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5, // 1 second delay + 1.5 second offset
                }}
              >
                <div className="text-white h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={logoImage}
                      alt="Logo"
                      className="w-24 h-auto"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Welcome to Compserv
                  </h3>
                  <p className="opacity-95 leading-snug flex-grow">
                    Experience the future of development with
                    our comprehensive suite of tools and
                    solutions designed for modern teams.
                    Transform your workflow with intelligent
                    automation and innovative technology
                    solutions.
                  </p>
                </div>
              </motion.div>

              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-60"></div>
              <div className="absolute top-16 right-16 w-40 h-40 bg-blue-200 rounded-full opacity-25 blur-2xl"></div>
              <div className="absolute bottom-16 right-32 w-32 h-32 bg-pink-200 rounded-full opacity-25 blur-2xl"></div>
              <div className="absolute top-1/2 right-64 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl transform -translate-y-1/2"></div>

              {/* Motion path indicators (optional visual guides) */}
              <div className="absolute top-1/2 right-12 w-[26rem] h-80 border-2 border-dashed border-gray-300 opacity-10 rounded-xl transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}