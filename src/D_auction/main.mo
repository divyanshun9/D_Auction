import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

//create canister
actor DAuction{
  stable var currentValue: Float = 000;
  //currentValue:=000;
  stable var currentBidder: Text = "None";
  //currentBidder:="None";

  public func topUp(amount: Float,name: Text) {
    if(amount > currentValue){
    currentValue := amount;
    currentBidder := name;
    Debug.print(debug_show(currentValue));
    Debug.print(currentBidder);
    };
  };

    public query func checkBalance(): async Float {
      return currentValue;
    };

    public query func checkName(): async Text {
      return currentBidder;
    };
  
};
