require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "FoodRescue backend is running!"
  });
});

// Create a donation
app.post("/api/donations", async (req, res) => {
  try {
    const {
      FOOD_NAME,
      QUANTITY,
      FOOD_TYPE,
      PICKUP_DATE,
      PICKUP_FROM,
      PICKUP_TO,
      PICKUP_LOCATION,
      CONTACT
    } = req.body;

    const { data, error } = await supabase
      .from("donations")
      .insert([
        {
          FOOD_NAME,
          QUANTITY,
          FOOD_TYPE,
          PICKUP_DATE,
          PICKUP_FROM,
          PICKUP_TO,
          PICKUP_LOCATION,
          CONTACT,
          STATUS: "available"
        }
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: error.message
      });
    }

    res.status(201).json({
      message: "Donation created successfully!",
      donation: data[0]
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});
// Create a receiver request
app.post("/api/requests", async (req, res) => {
  try {
    const {
      REQUIRED_QUANTITY,
      FOOD_TYPE,
      LOCATION,
      CAN_COLLECT
    } = req.body;

    const { data, error } = await supabase
      .from("requests")
      .insert([
        {
          REQUIRED_QUANTITY: REQUIRED_QUANTITY,
          FOOD_TYPE: FOOD_TYPE,
          LOCATION: LOCATION,
          CAN_COLLECT: CAN_COLLECT,
          STATUS: "pending"
        }
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: error.message
      });
    }

    res.status(201).json({
      message: "Request created successfully!",
      request: data[0]
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});
// Get all available donations
app.get("/api/donations", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .eq("STATUS", "available")
      .order("CREATED_AT", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: error.message
      });
    }

    res.json({
      message: "Available donations fetched successfully!",
      donations: data
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});
// Get all pending receiver requests
app.get("/api/requests", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .eq("STATUS", "pending")
      .order("CREATED_AT", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        error: error.message
      });
    }

    res.json({
      message: "Pending requests fetched successfully!",
      requests: data
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
});
// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`FoodRescue backend running on http://localhost:${PORT}`);
});
app.get("/api/matches", async (req, res) => {
  try {
    const { data: donations, error: donationError } = await supabase
      .from("donations")
      .select("*")
      .eq("STATUS", "available");

    if (donationError) {
      return res.status(500).json({ error: donationError.message });
    }

    const { data: requests, error: requestError } = await supabase
      .from("requests")
      .select("*")
      .eq("STATUS", "pending");

    if (requestError) {
      return res.status(500).json({ error: requestError.message });
    }

    const matches = [];

    donations.forEach((donation) => {
      const suitableRequest = requests.find(
        (request) =>
          request.FOOD_TYPE?.toLowerCase() ===
            donation.FOOD_TYPE?.toLowerCase() &&
          Number(donation.QUANTITY) >=
            Number(request.REQUIRED_QUANTITY)
      );

      if (suitableRequest) {
        matches.push({
          donation,
          request: suitableRequest,
        });
      }
    });

    res.json({
      message: "Matches fetched successfully!",
      matches,
    });
  } catch (error) {
    console.error("Match error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});