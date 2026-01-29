import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.cardNumber) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-3">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="Expiration Date"
        value={formData.expirationDate}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="billingAddress"
        placeholder="Billing Address"
        value={formData.billingAddress}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
