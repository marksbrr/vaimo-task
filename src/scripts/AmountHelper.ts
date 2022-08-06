/* eslint-disable class-methods-use-this */
export default abstract class AmountHelper {
  static totalAmount: number = 0;

  static add(amount: number): void {
    AmountHelper.totalAmount += amount;
    console.log(AmountHelper.totalAmount, amount);
  }

  static reduce = (amount: number): void => {
    AmountHelper.totalAmount -= amount;
    console.log(AmountHelper.totalAmount, amount);
  }
}
