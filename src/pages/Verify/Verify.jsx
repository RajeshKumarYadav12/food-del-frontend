import React, { useEffect } from "react";
import "./Verify.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import { useContext } from "react";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    if (!success || !orderId) {
      console.error("🚨 Missing success or orderId in URL.");
      navigate("/"); // Redirect to home if missing
      return;
    }

    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });

      if (response.data.success) {
        console.log("✅ Payment verified. Redirecting to /myorders...");
        navigate("/myorders");
      } else {
        console.error("❌ Payment verification failed:", response.data);
        navigate("/");
      }
    } catch (error) {
      console.error(
        "🚨 Error verifying payment:",
        error.response?.data || error.message
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (success !== null && orderId !== null) {
      verifyPayment();
    }
  }, [success, orderId]);

  return (
    <div className="verify">
      <div className="spinner"></div>
      <h3>Verifying payment...</h3>
    </div>
  );
};

export default Verify;
