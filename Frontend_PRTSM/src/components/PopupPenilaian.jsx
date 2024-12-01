import React from "react";
import logoApk from "../../img/iconApk.png";

const OvertimeForm = () => {
  return (
    <div className="w-full max-w-lg p-6 bg-white border border-green-600">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Isi Data Baru</h1>
        <img src={logoApk} alt="logoApk" className="h-8" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">Uang Lembur</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="w-full p-2 border border-gray-300 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled selected>
                Pilih Jam
              </option>
            </select>

            <input
              type="text"
              placeholder="Isi Nominal"
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-2 text-green-800 font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvertimeForm;
