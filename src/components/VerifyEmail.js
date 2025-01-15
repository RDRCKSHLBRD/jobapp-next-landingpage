import Image from "next/image";

export default function VerifyEmail({ email, onClose }) {
  const handleResendOTP = () => {
    console.log("Resend OTP clicked");
    // Placeholder for your resend OTP logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted");
    // Placeholder for your OTP verification logic
  };

  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center w-full h-full bg-cover bg-center z-50"
      style={{
        backgroundImage: `url('/images/OVERLAYhires.svg')`, // Background image for the overlay
      }}
      onClick={onClose} // Close on backdrop click
    >
      {/* Verification Card */}
      <div
        className="relative bg-white w-[607px] h-[599px] p-8 rounded-[4px] shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent click-through
      >

        {/* Icon */}
        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/images/icons/MAIL-vari1.svg"
            alt="Mail Icon"
            width={100} // Updated width to 100px
            height={100} // Updated height to 100px
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Verify your email
        </h1>

        {/* Email Notification */}
        <p className="text-base text-center text-gray-700 mb-8">
          One Time Password (OTP) has been sent to{" "}
          <span className="font-medium text-black">{email}</span>.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* OTP Input */}
          <div>
            <label
              htmlFor="otp"
              className="block text-base text-center font-semibold text-gray-700 mt-2 mb-3"
            >
              Enter the OTP to verify your email
            </label>
            <input
              type="text"
              id="otp"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter OTP"
              
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-500 text-white text-sm font-medium rounded-md px-4 hover:bg-blue-600 transition-colors"
          >
            Verify Email
          </button>
        </form>

        {/* Resend OTP */}
        <button
          type="button"
          className="mt-4 w-full text-sm text-blue-600 font-medium hover:underline mb-6"
          onClick={handleResendOTP}
        >
          Resend OTP
        </button>

        {/* Footer Note */}
        <p className="mt-8 text-base text-center text-black">
          Can’t find our email? Check your spam folder or promotions tab too!
        </p>

      </div>
    </div>
  );
}
