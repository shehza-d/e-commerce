import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      {/* <div className="flex min-h-[90vh] flex-col bg-red-400 items-center justify-center">
   <h2>404 Product Not Found</h2>
   <p>Could not find requested resource </p>
 </div> */}

      <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:flex-row md:gap-28 md:px-44 md:py-20 lg:px-24 lg:py-24">
        <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
          <div className="relative">
            <div className="relative z-20">
              <h1 className="my-2 text-2xl font-bold text-gray-800">
                Product not found
              </h1>
              <p className="my-2 text-gray-800">
                The page you are looking for does not exist. It might have been
                moved or deleted. Sorry about that! Please visit our home page.
              </p>
              <Link
                href="/"
                className="my-2 flex items-center justify-evenly rounded border bg-indigo-600 px-6 py-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Take me there!</span>
              </Link>
            </div>
            <span className="absolute -bottom-10 left-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-[18rem] font-extrabold text-transparent  opacity-70">
              404
            </span>
          </div>
        </div>
        <div>
          <Image
            width={500}
            height={500}
            alt="404 not found image"
            src="https://firebasestorage.googleapis.com/v0/b/shehza-d.appspot.com/o/programming-utils%2Fnot-Foundd.png?alt=media&token=a2e66aef-df8b-470b-99c5-4572e59e2097"
          />
        </div>
      </div>
    </>
  );
}
