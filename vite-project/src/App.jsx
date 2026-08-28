import './index.css'
import Login from './Components/Pages/Login/Login'
// import { Clapperboard, EyeOff } from "lucide-react";

// function App() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[url('public/background.jpg')] bg-center bg-cover">

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Content */}
//       <section className="relative z-10 flex min-h-96 items-center justify-center px-5 py-10 sm:px-8">
//         <div className="w-full max-w-152.5 rounded-2xl bg-[#25282c]/84 px-8 py-10 shadow-2xl backdrop-blur-sm sm:px-12 sm:py-12">
          
//           {/* Logo */}
//           <div className="mb-10 flex items-center justify-center gap-2 text-white">
//             <Clapperboard
//               size={48}
//               strokeWidth={2.8}
//               className="sm:h-14 sm:w-14"
//             />

//             <span className="text-4xl font-black tracking-tight sm:text-5xl">
//               CHILL
//             </span>
//           </div>

//           {/* Heading */}
//           <div className="mb-10 text-center">
//             <h1 className="text-3xl font-bold text-white sm:text-4xl">
//               Masuk
//             </h1>

//             <p className="mt-3 text-base text-gray-300 sm:text-lg">
//               Selamat datang kembali!
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-7">
            
//             {/* Username */}
//             <div>
//               <label
//                 htmlFor="username"
//                 className="mb-2 block text-base font-medium text-gray-200 sm:text-lg"
//               >
//                 Username
//               </label>

//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Masukkan username"
//                 className="w-full rounded-3xl border border-gray-600 bg-transparent px-5 py-4 text-base text-white outline-none transition placeholder:text-gray-400 focus:border-gray-400 sm:text-lg"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="mb-2 block text-base font-medium text-gray-200 sm:text-lg"
//               >
//                 Kata Sandi
//               </label>

//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Masukkan kata sandi"
//                   className="w-full rounded-3xl border border-gray-600 bg-transparent px-5 py-4 pr-14 text-base text-white outline-none transition placeholder:text-gray-400 focus:border-gray-400 sm:text-lg"
//                 />

//                 <button
//                   type="button"
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
//                 >
//                   <EyeOff size={24} />
//                 </button>
//               </div>
//             </div>

//             {/* Register & Forgot Password */}
//             <div className="flex flex-col gap-3 text-center text-base text-gray-300 sm:flex-row sm:justify-between sm:text-left sm:text-lg">
//               <p>
//                 Belum punya akun?{" "}
//                 <button
//                   type="button"
//                   className="font-medium text-white hover:underline"
//                 >
//                   Daftar
//                 </button>
//               </p>

//               <button
//                 type="button"
//                 className="font-medium text-white hover:underline"
//               >
//                 Lupa kata sandi?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full rounded-3xl border border-gray-500 bg-[#4a4f53] py-4 text-lg font-medium text-white transition hover:bg-[#5a6065] active:scale-[0.99] sm:text-xl"
//             >
//               Masuk
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-4">
//               <div className="h-px flex-1 bg-gray-600"></div>

//               <span className="text-base text-gray-400 sm:text-lg">
//                 Atau
//               </span>

//               <div className="h-px flex-1 bg-gray-600"></div>
//             </div>

//             {/* Google Button */}
//             <button
//               type="button"
//               className="flex w-full items-center justify-center gap-4 rounded-3xl border border-gray-600 py-4 text-lg font-medium text-gray-200 transition hover:bg-white/5 sm:text-xl"
//             >
//               <span className="flex h-6 w-6 items-center justify-center font-bold">
//                 <span className="text-blue-500">G</span>
//               </span>

//               Masuk dengan Google
//             </button>

//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }

function App() {
  return (
      <Login></Login>
  )
}

export default App
