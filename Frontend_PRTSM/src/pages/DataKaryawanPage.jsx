import React from "react";
import LayoutLogin from "./berhasil-login-page/Layout";
import DataKaryawan from "../components/DataKaryawan";

const DataKaryawanPage = () => {
  return (
    <LayoutLogin>
      <DataKaryawan />
    </LayoutLogin>
  );
};

export default DataKaryawanPage;
