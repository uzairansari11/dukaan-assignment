import React from "react";

const Table = ({ payout, data }) => {
  return (
    <div className=" w-full overflow-y-scroll ">
      <table className="w-full text-[14px] border-collapse">
        <thead className="bg-[#f2f2f2] text-custom-gray-600 font-normal text-left rounded-[4px] ">
          <tr>
            <th className="py-[10px] px-[12px] font-medium text-custom-gray-800">
              {payout ? (
                <div className="w-full py-[4px] px-[20px] ">
                  <img src="/svg/triangle.svg" alt="triangle" />
                </div>
              ) : (
                "Order ID"
              )}
            </th>
            <th className="py-[10px] px-[12px] font-medium text-custom-gray-800">
              {payout ? "" : "Status"}
            </th>
            <th className="py-[10px] px-[12px] font-medium text-custom-gray-800">
              Transaction ID
            </th>

            <th className="py-[10px] px-[12px] font-medium text-custom-gray-800">
              {!payout ? "Refund date" : "Order amount"}
            </th>
            <th
              className={`py-[10px] px-[12px] font-medium text-custom-gray-800  ${
                !payout ? "text-right" : "text-left"
              } `}
            >
              {payout ? "Transaction fees" : "Refund amount"}
            </th>
            {payout ? (
              <th className="py-[10px] px-[12px] text-right font-medium text-custom-gray-800">
                Total
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <>
              <tr
                key={item.orderid}
                className="border-b-2 border-custom-gray-100"
              >
                <td className="py-[14px] px-[12px] text-custom-blue-400 font-medium">
                  {payout ? null : item.orderid}
                </td>
                <td className="py-[14px] px-[12px] flex items-center gap-[8px]">
                  <div
                    className={`h-[8px] w-[8px] rounded-full ${
                      item.status === "Processing"
                        ? "bg-gray-400"
                        : "bg-[#17b31b]"
                    }`}
                  ></div>
                  {item.status}
                </td>
                <td className="py-[14px] px-[12px] text-custom-gray-800">
                  {item.transactionid}
                </td>
                <td
                  className={`py-[14px] px-[12px] ${payout ? "pl-9" : "pl-3"} `}
                >
                  {payout ? item.orderamount : item.refundDate}
                </td>
                <td
                  className={`py-[14px] px-[12px] pl-14  ${
                    !payout ? "text-right" : "text-left"
                  } `}
                >
                  {item.amount}
                </td>
                {payout ? (
                  <td className="py-[14px] px-[12px] text-custom-gray-800 text-right">
                    {item.total}
                  </td>
                ) : null}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
