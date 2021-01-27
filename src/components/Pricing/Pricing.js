import React from "react";
import "./pricing.css";
const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <h1 className="headStyling">Pricing</h1>
        <table>
          <thead>
            <tr>
              <th>Pricing</th>
              <th>Ex-Showroom</th>
              <th>OTR Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bike-spec">295 Wh / 30 KM Range</td>
              {/* <td>&#x20B9;19,800</td>
            <td>&#x20B9;20,499</td> */}
              <td>TBD</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td className="bike-spec">388.5 Wh / 45 KM Range</td>
              {/* <td>&#x20B9;22,300</td>
            <td>&#x20B9;22,800</td> */}
              <td>TBD</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td className="bike-spec">600 Wh / 70 KM Range</td>
              {/* <td>&#x20B9;29,200</td>
            <td>&#x20B9;29,800</td> */}
              <td>TBD</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>

        <p className="pricing-info">
          Recommended On‐The‐Road (OTR) retail prices include: delivery charge,
          additional decals and stickering, Battery half charged, first
          registration fee at ₹ 500, customs and excise duty (if any).
        </p>
      </div>
    </>
  );
};

export default Pricing;
