import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const DataKaryawan = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        <p className="font-bold text-2xl">Data Karyawan</p>

        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 border-collapse border border-gray-300">
            <thead className="bg-[#CEF6C0]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Lengkap
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jabatan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal Masuk Pegawai
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tempat/
                  <br />
                  Tanggal Lahir
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jenis Kelamin
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  NIK
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No Telp
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Status Pernikahan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Bank
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nomor Rekening
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama Pemegang Rekening
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Provinsi
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Kabupaten/Kota
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Kecamatan/ <br />
                  Kelurahan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  ???
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataKaryawan;
