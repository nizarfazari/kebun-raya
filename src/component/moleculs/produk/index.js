import React from "react";
import { ProdukColumn } from "../../atoms";

const produk = () => {
  return (
    <section class="produk-kanan mt-5">
      <div class="container">
        <ProdukColumn title="Grafted Ficus Bonsai" desc="are you looking for small desk plant sure to spark conversation ? Ficus microspa “Gingseng” definitely look to it,These plants are extremely forgiving.easily tolerating" />
        <ProdukColumn
          title="Grafted Ficus Bonsai"
          desc="are you looking for small desk plant sure to spark conversation ? Ficus microspa “Gingseng” definitely look to it,These plants are extremely forgiving.easily tolerating"
          style={{ order: 2 }}
        />
        <ProdukColumn title="Grafted Ficus Bonsai" desc="are you looking for small desk plant sure to spark conversation ? Ficus microspa “Gingseng” definitely look to it,These plants are extremely forgiving.easily tolerating" />
      </div>
    </section>
  );
};

export default produk;
