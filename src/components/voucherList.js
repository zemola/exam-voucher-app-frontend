const VoucherList = ({vouchers}) => {

  

  console.log(vouchers);

  return (
    <div className="voucher-list">
      {vouchers.map((voucher) => {
        return (
          <div className="voucher-preview" key={voucher.id}>
            <div><img src={voucher.id} alt="Voucher"/></div>
            <h2>{voucher.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default VoucherList;
