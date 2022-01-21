const formatAngka = (money) => {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(money);
};

export default formatAngka;
