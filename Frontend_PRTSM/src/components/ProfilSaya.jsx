import React from "react";
import AddProfil from "../img/AddProfil.png";
import { Link } from "react-router-dom";

const ProfilSaya = () => {
  return (
    <div className="py-3 px-4 ">
      <div className="w-full">
        <p className="text-2xl font-bold">Profil Saya</p>
      </div>
      <div className="w-full mt-7">
        <div className="">
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="w-full">
                <p className="font-bold">Data Pribadi</p>
                <div className="grid gap-y-2">
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Pengguna"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Kata Sandi"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Lengkap*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Tempat/Tanggal Lahir*"
                  />
                  <select name="" className="inp-res" id="">
                    <option value="" disabled hidden>
                      Pilih Jenis Kelamin
                    </option>
                    <option value="">Laki-Laki</option>
                    <option value="">Perempuan</option>
                  </select>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nomor Induk Kependudukan*"
                  />
                  <input
                    className="inp-res"
                    type="number"
                    placeholder="Nomor Telepon Pribadi*"
                  />
                  <select name="" className="inp-res" id="">
                    <option value="" disabled hidden>
                      Status Pernikahan
                    </option>
                    <option value="">Menikah</option>
                    <option value="">Lajang</option>
                  </select>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Bank"
                  />
                  <input
                    className="inp-res"
                    type="number"
                    placeholder="Nomor Rekening"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Pemegang Rekening"
                  />
                  <p className="font-bold">Alamat Pribadi</p>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Provinsi*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Kabupaten/Kota*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Kecamatan*"
                  />
                  <button className="bg-[#174A04] mt-3 text-white px-4 py-2 rounded-xl">
                    Simpan
                  </button>
                  <button className="bg-[#ca0606] mt-3 text-white px-4 py-2 rounded-xl">
                    Keluar Akun
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="flex">
                  <img
                    className="bg-[#D9D9D9] border border-gray-500"
                    src={AddProfil}
                    alt=""
                  />
                  <div className="ml-3 w-1/2">
                    <button className="bg-[#2E7316] mt-3 text-white px-4 py-2 rounded-3xl">
                      Unggah Gambar
                    </button>
                    <p>Belum ada gambar yang dipilih.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilSaya;
