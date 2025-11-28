export default function HeroInquiry() {
  return (
    <div
      className="relative rounded-lg overflow-hidden mt-8 mx-4 md:mx-8 lg:mx-16"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue gradient overlay (LEFT DARK → RIGHT LIGHT) */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-800/60 to-blue-400/10"></div>

      {/* Content */}
      <div className="relative p-4 md:p-6 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">
            An easy way to send<br /> requests to all suppliers
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        {/* Form */}
        <div className="flex-1 w-full max-w-md bg-white p-4 md:p-6 rounded-lg shadow">
          <p className="text-lg font-bold mb-2">Send quotes to Suppliers</p>
          <input
            className="w-full p-2 mb-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What item you need?"
          />
          <textarea
            className="w-full p-2 mb-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type more details"
          ></textarea>

          <div className="flex flex-col sm:flex-row gap-2 mb-2">
            <input
              type="text"
              placeholder="Quantity"
              className="flex-1 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="flex-1 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Pcs</option>
              <option>Box</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
