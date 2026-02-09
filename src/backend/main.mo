import Int "mo:core/Int";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type ContactMessage = {
    timestamp : Time.Time;
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Int.compare(msg2.timestamp, msg1.timestamp);
    };
  };

  let contactMessages = Map.empty<Text, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Text {
    let timestamp = Time.now();
    let id = timestamp.toText();
    let contactMessage : ContactMessage = {
      timestamp;
      name;
      email;
      message;
    };
    contactMessages.add(id, contactMessage);
    "Thank you for your message!";
  };

  public query ({ caller }) func getContactMessage(id : Text) : async ContactMessage {
    switch (contactMessages.get(id)) {
      case (null) { Runtime.trap("Message not found") };
      case (?msg) { msg };
    };
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort();
  };
};
