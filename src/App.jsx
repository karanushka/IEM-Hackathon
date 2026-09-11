import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const [role, setRole] = useState("");
  const [dashboardRole, setDashboardRole] = useState("donor");
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
  if (page !== "dashboard") return;

  const loadDashboard = async () => {
    try {
      const [donationRes, requestRes, matchRes] = await Promise.all([
        fetch("https://foodrescue-backend-1bhd.onrender.com/api/donations"),
        fetch("https://foodrescue-backend-1bhd.onrender.com/api/requests"),
        fetch("https://foodrescue-backend-1bhd.onrender.com/api/matches"),
      ]);

      const donationData = await donationRes.json();
      const requestData = await requestRes.json();
      const matchData = await matchRes.json();

      console.log("DONATION DATA:", donationData);
      console.log("REQUEST DATA:", requestData);
      console.log("MATCH DATA:", matchData);

      setDonations(donationData.donations || []);
      setRequests(requestData.requests || []);
      setMatches(matchData.matches || []);
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  loadDashboard();
}, [page]);

  const translations = {
    en: {
      home: "Home",
      how: "How It Works",
      about: "About Us",
      login: "Login",
      register: "Create Account",
      dashboard: "Dashboard",
      donate: "Donate Food",
      receive: "Receive Food",

      title1: "Turn Surplus Food",
      title2: "Into Hope.",
      subtitle:
        "Connecting surplus food with people and communities who need it most.",

      rescue: "Food Rescue",
      rescueText:
        "Rescue surplus food from restaurants, caterers and organizations before it goes to waste.",

      donors: "For Donors",
      donorText:
        "Restaurants, caterers, canteens and organizations can donate their surplus food easily.",

      receivers: "For Receivers",
      receiverText:
        "NGOs, volunteers and community organizations can request food for people in need.",

      impact: "Make an Impact",
      impactText:
        "Every rescued meal helps reduce food waste and supports a better community.",

      foodRescue: "Food Rescue",
      foodRescueText:
        "Smartly connect food donors with nearby receivers based on quantity, location and pickup time.",

      prediction: "Food Waste Prediction",
      predictionText:
        "AI-powered food waste prediction and demand planning will be coming soon.",
      coming: "Coming Soon",

      back: "← Back to Home",
      donorDashboard: "Donor Dashboard",
      receiverDashboard: "Receiver Dashboard",

      donorTitle: "Donate Surplus Food",
      foodName: "Food Name",
      foodNamePlaceholder: "Example: Cooked Rice & Dal",
      quantity: "Total Meals / Packets",
      quantityPlaceholder: "Example: 100",
      foodType: "Food Type",
      veg: "Veg",
      nonVeg: "Non-Veg",
      both: "Both",
      pickupDate: "Pickup Date",
      pickupTime: "Pickup Time",
      from: "From",
      to: "To",
      location: "Pickup Location",
      locationPlaceholder: "Enter exact pickup location",
      contact: "Contact Number (Optional)",
      contactPlaceholder: "Example: +91 98765 43210",
      submit: "Post Food Donation",

      receiverTitle: "Receive Food",
      required: "Packets Required",
      requiredPlaceholder: "Example: 50",
      receiverLocation: "Current Location",
      receiverLocationPlaceholder: "Enter your current location",
      pickup: "Can you collect within the pickup time?",
      yes: "Yes",
      no: "No",
      request: "Request Food",

      registerTitle: "Create Account",
      chooseRole: "I want to register as",
      donorRole: "Food Donor",
      receiverRole: "Food Receiver",
      name: "Name / Organization Name",
      namePlaceholder: "Enter your name or organization name",
      email: "Email Address (Optional)",
      emailPlaceholder: "Example: example@email.com",
      phone: "Phone Number (Optional)",
      phonePlaceholder: "Example: +91 98765 43210",
      contactNote:
        "Email or Phone Number — at least one is required.",
      password: "Password",
      passwordPlaceholder: "Create a password",
      registerButton: "Create Account",
      alreadyAccount: "Already have an account?",
      goLogin: "Login",

      loginTitle: "Welcome Back",
      loginButton: "Login",
      noAccount: "Don't have an account?",
      createAccount: "Create Account",
      loginEmail: "Email Address",
      loginEmailPlaceholder: "Enter your email",
      loginPhone: "Phone Number",
      loginPhonePlaceholder: "Enter your phone number",
      loginNote:
        "Use the email or phone number you registered with.",

      totalDonations: "Total Donations",
      donations: "Donations",
      foodAvailable: "Food Available",
      matched: "Matched",
      recentDonations: "Recent Donations",
      availableFood: "Available Food",
      packets: "Packets",
      myRequests: "My Requests",
      requests: "Requests",
      confirmed: "Confirmed",
      smartMatching: "Smart Food Matching",
      bestMatch: "Best Match",
      required: "Required",
      distance: "Distance",
      withinAvailableTime: "Within available time",
      remainingFood: "Remaining Food",
      nextMatch: "Available for Next Match",
      remainingFoodText:
        "will remain available for the next suitable receiver.",
      donationStatus: "Donation Status",
      available: "Available",
      requested: "Requested",
      pickedUp: "Picked Up",
      completed: "Completed",
      currentStatus: "Current Status",

      foodRice: "Cooked Rice & Dal",
      foodKhichuri: "Vegetable Khichuri",
      foodBread: "Bread & Curry",
      bestMatchNgo: "Helping Hands NGO",

      footerText: "Reducing food waste. Spreading hope.",
      or: "OR",
      donationSubmitted: "Donation form submitted!",
      requestSubmitted: "Food request submitted!",
      accountCreated: "Account created successfully!",
      loginSuccess: "Login successful!",
    },

    bn: {
      home: "হোম",
      how: "কীভাবে কাজ করে",
      about: "আমাদের সম্পর্কে",
      login: "লগইন",
      register: "অ্যাকাউন্ট তৈরি করুন",
      dashboard: "ড্যাশবোর্ড",
      donate: "খাবার দান করুন",
      receive: "খাবার গ্রহণ করুন",

      title1: "অতিরিক্ত খাবারকে",
      title2: "আশায় পরিণত করুন।",
      subtitle:
        "অতিরিক্ত খাবারকে সেই মানুষ ও সম্প্রদায়ের সঙ্গে যুক্ত করি যাদের সবচেয়ে বেশি প্রয়োজন।",

      rescue: "খাবার উদ্ধার",
      rescueText:
        "রেস্টুরেন্ট, ক্যাটারার এবং বিভিন্ন সংস্থার অতিরিক্ত খাবার নষ্ট হওয়ার আগে উদ্ধার করুন।",

      donors: "দাতাদের জন্য",
      donorText:
        "রেস্টুরেন্ট, ক্যাটারার, ক্যান্টিন এবং সংস্থাগুলি সহজেই অতিরিক্ত খাবার দান করতে পারবে।",

      receivers: "গ্রহণকারীদের জন্য",
      receiverText:
        "NGO, স্বেচ্ছাসেবক এবং বিভিন্ন সংগঠন প্রয়োজনীয় মানুষের জন্য খাবারের অনুরোধ করতে পারবে।",

      impact: "পরিবর্তন আনুন",
      impactText:
        "প্রতিটি উদ্ধার করা খাবার খাবারের অপচয় কমায় এবং সমাজকে সাহায্য করে।",

      foodRescue: "খাবার উদ্ধার",
      foodRescueText:
        "পরিমাণ, অবস্থান এবং সংগ্রহের সময়ের ভিত্তিতে দাতা ও কাছাকাছি গ্রহণকারীদের স্মার্টভাবে যুক্ত করুন।",

      prediction: "খাবারের অপচয় পূর্বাভাস",
      predictionText:
        "AI-এর মাধ্যমে খাবারের অপচয় পূর্বাভাস এবং চাহিদা পরিকল্পনা শীঘ্রই আসছে।",
      coming: "শীঘ্রই আসছে",

      back: "← হোমে ফিরে যান",
      donorDashboard: "দাতা ড্যাশবোর্ড",
      receiverDashboard: "গ্রহীতা ড্যাশবোর্ড",

      donorTitle: "অতিরিক্ত খাবার দান করুন",
      foodName: "খাবারের নাম",
      foodNamePlaceholder: "উদাহরণ: রান্না করা ভাত ও ডাল",
      quantity: "মোট খাবার / প্যাকেট",
      quantityPlaceholder: "উদাহরণ: ১০০",
      foodType: "খাবারের ধরন",
      veg: "ভেজ",
      nonVeg: "নন-ভেজ",
      both: "দুটিই",
      pickupDate: "সংগ্রহের তারিখ",
      pickupTime: "সংগ্রহের সময়",
      from: "থেকে",
      to: "পর্যন্ত",
      location: "সংগ্রহের স্থান",
      locationPlaceholder: "সঠিক সংগ্রহের স্থান লিখুন",
      contact: "যোগাযোগের নম্বর (ঐচ্ছিক)",
      contactPlaceholder: "উদাহরণ: +91 98765 43210",
      submit: "খাবার দান পোস্ট করুন",

      receiverTitle: "খাবার গ্রহণ করুন",
      required: "প্রয়োজনীয় প্যাকেট",
      requiredPlaceholder: "উদাহরণ: ৫০",
      receiverLocation: "বর্তমান অবস্থান",
      receiverLocationPlaceholder: "আপনার বর্তমান অবস্থান লিখুন",
      pickup: "আপনি কি সংগ্রহের সময়ের মধ্যে খাবার সংগ্রহ করতে পারবেন?",
      yes: "হ্যাঁ",
      no: "না",
      request: "খাবারের অনুরোধ করুন",

      registerTitle: "অ্যাকাউন্ট তৈরি করুন",
      chooseRole: "আমি হিসেবে রেজিস্টার করতে চাই",
      donorRole: "খাবার দাতা",
      receiverRole: "খাবার গ্রহণকারী",
      name: "নাম / সংস্থার নাম",
      namePlaceholder: "আপনার নাম বা সংস্থার নাম লিখুন",
      email: "ইমেল ঠিকানা (ঐচ্ছিক)",
      emailPlaceholder: "উদাহরণ: example@email.com",
      phone: "ফোন নম্বর (ঐচ্ছিক)",
      phonePlaceholder: "উদাহরণ: +91 98765 43210",
      contactNote:
        "ইমেল অথবা ফোন নম্বর — অন্তত একটি দিতে হবে।",
      password: "পাসওয়ার্ড",
      passwordPlaceholder: "একটি পাসওয়ার্ড তৈরি করুন",
      registerButton: "অ্যাকাউন্ট তৈরি করুন",
      alreadyAccount: "ইতিমধ্যেই অ্যাকাউন্ট আছে?",
      goLogin: "লগইন",

      loginTitle: "আবার স্বাগতম",
      loginButton: "লগইন",
      noAccount: "অ্যাকাউন্ট নেই?",
      createAccount: "অ্যাকাউন্ট তৈরি করুন",
      loginEmail: "ইমেল ঠিকানা",
      loginEmailPlaceholder: "আপনার ইমেল লিখুন",
      loginPhone: "ফোন নম্বর",
      loginPhonePlaceholder: "আপনার ফোন নম্বর লিখুন",
      loginNote:
        "আপনি যে ইমেল অথবা ফোন নম্বর দিয়ে রেজিস্টার করেছেন সেটি ব্যবহার করুন।",

      totalDonations: "মোট দান",
      donations: "দান",
      foodAvailable: "উপলব্ধ খাবার",
      matched: "ম্যাচ হয়েছে",
      recentDonations: "সাম্প্রতিক দান",
      availableFood: "উপলব্ধ খাবার",
      packets: "প্যাকেট",
      myRequests: "আমার অনুরোধ",
      requests: "অনুরোধ",
      confirmed: "নিশ্চিত",
      smartMatching: "স্মার্ট খাবার ম্যাচিং",
      bestMatch: "সেরা ম্যাচ",
      required: "প্রয়োজন",
      distance: "দূরত্ব",
      withinAvailableTime: "উপলব্ধ সময়ের মধ্যে",
      remainingFood: "অবশিষ্ট খাবার",
      nextMatch: "পরবর্তী ম্যাচের জন্য উপলব্ধ",
      remainingFoodText:
        "পরবর্তী উপযুক্ত গ্রহীতার জন্য উপলব্ধ থাকবে।",
      donationStatus: "দানের অবস্থা",
      available: "উপলব্ধ",
      requested: "অনুরোধ করা হয়েছে",
      pickedUp: "সংগ্রহ করা হয়েছে",
      completed: "সম্পন্ন",
      currentStatus: "বর্তমান অবস্থা",

      foodRice: "রান্না করা ভাত ও ডাল",
      foodKhichuri: "সবজি খিচুড়ি",
      foodBread: "রুটি ও তরকারি",
      bestMatchNgo: "হেল্পিং হ্যান্ডস NGO",

      footerText: "খাবারের অপচয় কমাই। আশার আলো ছড়াই।",
      or: "অথবা",
      donationSubmitted: "খাবার দানের ফর্ম জমা হয়েছে!",
      requestSubmitted: "খাবারের অনুরোধ জমা হয়েছে!",
      accountCreated: "অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!",
      loginSuccess: "লগইন সফল হয়েছে!",
    },

    hi: {
      home: "होम",
      how: "कैसे काम करता है",
      about: "हमारे बारे में",
      login: "लॉगिन",
      register: "अकाउंट बनाएं",
      dashboard: "डैशबोर्ड",
      donate: "भोजन दान करें",
      receive: "भोजन प्राप्त करें",

      title1: "बचे हुए भोजन को",
      title2: "उम्मीद में बदलें।",
      subtitle:
        "बचे हुए भोजन को उन लोगों और समुदायों से जोड़ना जिन्हें इसकी सबसे अधिक आवश्यकता है।",

      rescue: "फूड रेस्क्यू",
      rescueText:
        "रेस्टोरेंट, कैटरर्स और संगठनों के अतिरिक्त भोजन को बर्बाद होने से पहले बचाएं।",

      donors: "दाताओं के लिए",
      donorText:
        "रेस्टोरेंट, कैटरर्स, कैंटीन और संगठन आसानी से अतिरिक्त भोजन दान कर सकते हैं।",

      receivers: "प्राप्तकर्ताओं के लिए",
      receiverText:
        "NGO, स्वयंसेवक और सामुदायिक संगठन जरूरतमंद लोगों के लिए भोजन का अनुरोध कर सकते हैं।",

      impact: "बदलाव लाएं",
      impactText:
        "हर बचाया गया भोजन खाद्य अपव्यय को कम करता है और समुदाय की मदद करता है।",

      foodRescue: "फूड रेस्क्यू",
      foodRescueText:
        "मात्रा, स्थान और संग्रह समय के आधार पर भोजन दाताओं को नजदीकी प्राप्तकर्ताओं से स्मार्ट तरीके से जोड़ें।",

      prediction: "फूड वेस्ट प्रेडिक्शन",
      predictionText:
        "AI आधारित खाद्य अपव्यय पूर्वानुमान और मांग योजना जल्द ही आ रही है।",
      coming: "जल्द आ रहा है",

      back: "← होम पर वापस जाएं",
      donorDashboard: "दाता डैशबोर्ड",
      receiverDashboard: "प्राप्तकर्ता डैशबोर्ड",

      donorTitle: "अतिरिक्त भोजन दान करें",
      foodName: "भोजन का नाम",
      foodNamePlaceholder: "उदाहरण: पका हुआ चावल और दाल",
      quantity: "कुल भोजन / पैकेट",
      quantityPlaceholder: "उदाहरण: 100",
      foodType: "भोजन का प्रकार",
      veg: "वेज",
      nonVeg: "नॉन-वेज",
      both: "दोनों",
      pickupDate: "संग्रह की तारीख",
      pickupTime: "संग्रह का समय",
      from: "से",
      to: "तक",
      location: "संग्रह स्थान",
      locationPlaceholder: "सटीक संग्रह स्थान दर्ज करें",
      contact: "संपर्क नंबर (वैकल्पिक)",
      contactPlaceholder: "उदाहरण: +91 98765 43210",
      submit: "भोजन दान पोस्ट करें",

      receiverTitle: "भोजन प्राप्त करें",
      required: "आवश्यक पैकेट",
      requiredPlaceholder: "उदाहरण: 50",
      receiverLocation: "वर्तमान स्थान",
      receiverLocationPlaceholder: "अपना वर्तमान स्थान दर्ज करें",
      pickup: "क्या आप संग्रह समय के अंदर भोजन ले सकते हैं?",
      yes: "हाँ",
      no: "नहीं",
      request: "भोजन का अनुरोध करें",

      registerTitle: "अकाउंट बनाएं",
      chooseRole: "मैं किस रूप में रजिस्टर करना चाहता हूँ",
      donorRole: "भोजन दाता",
      receiverRole: "भोजन प्राप्तकर्ता",
      name: "नाम / संगठन का नाम",
      namePlaceholder: "अपना नाम या संगठन का नाम दर्ज करें",
      email: "ईमेल पता (वैकल्पिक)",
      emailPlaceholder: "उदाहरण: example@email.com",
      phone: "फोन नंबर (वैकल्पिक)",
      phonePlaceholder: "उदाहरण: +91 98765 43210",
      contactNote:
        "ईमेल या फोन नंबर — कम से कम एक देना जरूरी है।",
      password: "पासवर्ड",
      passwordPlaceholder: "एक पासवर्ड बनाएं",
      registerButton: "अकाउंट बनाएं",
      alreadyAccount: "पहले से अकाउंट है?",
      goLogin: "लॉगिन",

      loginTitle: "वापसी पर स्वागत है",
      loginButton: "लॉगिन",
      noAccount: "अकाउंट नहीं है?",
      createAccount: "अकाउंट बनाएं",
      loginEmail: "ईमेल पता",
      loginEmailPlaceholder: "अपना ईमेल दर्ज करें",
      loginPhone: "फोन नंबर",
      loginPhonePlaceholder: "अपना फोन नंबर दर्ज करें",
      loginNote:
        "जिस ईमेल या फोन नंबर से आपने रजिस्टर किया है, उसका उपयोग करें।",

      totalDonations: "कुल दान",
      donations: "दान",
      foodAvailable: "उपलब्ध भोजन",
      matched: "मैच किया गया",
      recentDonations: "हाल के दान",
      availableFood: "उपलब्ध भोजन",
      packets: "पैकेट",
      myRequests: "मेरे अनुरोध",
      requests: "अनुरोध",
      confirmed: "पुष्ट",
      smartMatching: "स्मार्ट फूड मैचिंग",
      bestMatch: "सबसे अच्छा मैच",
      required: "आवश्यक",
      distance: "दूरी",
      withinAvailableTime: "उपलब्ध समय के अंदर",
      remainingFood: "बचा हुआ भोजन",
      nextMatch: "अगले मैच के लिए उपलब्ध",
      remainingFoodText:
        "अगले उपयुक्त प्राप्तकर्ता के लिए उपलब्ध रहेगा।",
      donationStatus: "दान की स्थिति",
      available: "उपलब्ध",
      requested: "अनुरोध किया गया",
      pickedUp: "संग्रह किया गया",
      completed: "पूरा हुआ",
      currentStatus: "वर्तमान स्थिति",

      foodRice: "पका हुआ चावल और दाल",
      foodKhichuri: "सब्ज़ी खिचड़ी",
      foodBread: "रोटी और सब्ज़ी",
      bestMatchNgo: "हेल्पिंग हैंड्स NGO",

      footerText: "खाद्य अपव्यय कम करें। उम्मीद फैलाएं।",
      or: "या",
      donationSubmitted: "भोजन दान फॉर्म जमा हो गया!",
      requestSubmitted: "भोजन अनुरोध जमा हो गया!",
      accountCreated: "अकाउंट सफलतापूर्वक बन गया!",
      loginSuccess: "लॉगिन सफल हुआ!",
    },
  };

  const t = translations[language];
  // =========================
// DASHBOARD PAGE
// =========================

if (page === "dashboard") {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">FoodRescue</div>

        <div className="nav-right">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </nav>

      <section className="form-page">
        <button className="back-button" onClick={() => setPage("home")}>
          {t.back}
        </button>

        <div className="form-card">
          <div className="form-icon">📊</div>

          <h1>
            {dashboardRole === "donor"
  ? t.donorDashboard
  : t.receiverDashboard}
          </h1>
          <div
  className="hero-buttons"
  style={{
    justifyContent: "center",
    marginBottom: "30px",
  }}
>
  <button
  className={
    dashboardRole === "donor"
      ? "primary-button"
      : "secondary-button"
  }
  onClick={() => setDashboardRole("donor")}
>
  {t.donorDashboard}
</button>

<button
  className={
    dashboardRole === "receiver"
      ? "primary-button"
      : "secondary-button"
  }
  onClick={() => setDashboardRole("receiver")}
>
  {t.receiverDashboard}
</button>
</div>

          {dashboardRole === "donor" ? (
            <>
              <div className="role-section">
                <div className="role-card">
                  <div className="card-icon">🍱</div>
                  <h3>{t.totalDonations}</h3>
                  <p>{donations.length} {t.donations}</p>
                </div>

                <div className="role-card">
                  <div className="card-icon">📦</div>
                  <h3>{t.foodAvailable}</h3>
                  <p>
                    {donations.reduce((total, donation) => total + Number(donation.QUANTITY || 0), 0)} {t.packets}
                  </p>
                </div>

                <div className="role-card">
                  <div className="card-icon">🤝</div>
                  <h3>{t.matched}</h3>
                  <p>{matches.length} {t.donations}</p>
                </div>
              </div>

              <div className="feature-card">
                <h3>{t.recentDonations}</h3>
                {donations.slice(0, 3).map((donation) => (
                 <p key={donation.ID}>
                  🍱 {donation.FOOD_NAME} — {donation.QUANTITY} {t.packets}
                 </p>
                ))}
              </div>
<div className="feature-card matching-card">
  <h3>🤝 {t.smartMatching}</h3>

  {matches.length === 0 ? (
    <p>No suitable matches found.</p>
  ) : (
    matches.map((match) => {
      const donation = match.donation;
      const request = match.request;

      const remaining =
        Number(donation.QUANTITY) -
        Number(request.REQUIRED_QUANTITY);

      return (
        <div key={donation.ID}>
          <div className="match-item">
            <h4>🍱 {donation.FOOD_NAME}</h4>

            <p>
              <strong>{t.available}:</strong>{" "}
              {donation.QUANTITY} {t.packets}
            </p>

            <p>
              <strong>{t.bestMatch}:</strong>{" "}
              Receiver at {request.LOCATION}
            </p>

            <p>
              <strong>{t.required}:</strong>{" "}
              {request.REQUIRED_QUANTITY} {t.packets}
            </p>

            <p>
              <strong>{t.foodType}:</strong>{" "}
              {donation.FOOD_TYPE}
            </p>

            <p>
              <strong>{t.pickup}:</strong>{" "}
              {request.CAN_COLLECT
                ? t.withinAvailableTime
                : "Cannot collect within available time"}
            </p>

            <div className="match-status">
              🟢 {t.bestMatch} —{" "}
              {request.REQUIRED_QUANTITY} {t.packets}
            </div>
          </div>

          {remaining > 0 && (
            <div className="match-item">
              <h4>📦 {t.remainingFood}</h4>

              <p>
                {remaining} {t.packets} {t.remainingFoodText}
              </p>

              <div className="match-status">
                🟡 {t.nextMatch}
              </div>
            </div>
          )}
        </div>
      );
    })
  )}
</div>
<div className="feature-card status-card">
  <h3>📋 {t.donationStatus}</h3>
  <div className="status-timeline">
    <div className="status-step active">
      <span>1</span>
      <p>{t.available}</p>
    </div>

    <div className="status-line"></div>

    <div className="status-step active">
      <span>2</span>
      <p>{t.requested}</p>
    </div>

    <div className="status-line"></div>

    <div className="status-step active">
      <span>3</span>
      <p>{t.matched}</p>
    </div>

    <div className="status-line"></div>

    <div className="status-step">
      <span>4</span>
      <p>{t.pickedUp}</p>
    </div>

    <div className="status-line"></div>

    <div className="status-step">
      <span>5</span>
      <p>{t.completed}</p>
    </div>
  </div>

    <p className="status-note">
    {t.currentStatus}:{" "}
    <strong>
      {donations.length > 0 ? donations[0].STATUS : "No donations"}
    </strong>
  </p>
</div>
            </>
          ) : (
            <>
              <div className="role-section">
                <div className="role-card">
                  <div className="card-icon">🍱</div>
                  <h3>{t.availableFood}</h3>
                  <p>
                    {donations.reduce((total, donation) => total + Number(donation.QUANTITY || 0), 0)} {t.packets}
                  </p>
                </div>

                <div className="role-card">
                  <div className="card-icon">📋</div>
                  <h3>{t.myRequests}</h3>
                  <p>{requests.length} {t.requests}</p>
                </div>

                <div className="role-card">
                  <div className="card-icon">✅</div>
                  <h3>{t.confirmed}</h3>
                  <p>{requests.filter(
    (request) => request.STATUS === "confirmed"
  ).length} {t.requests}</p>
                </div>
              </div>

              <div className="feature-card">
                <h3>{t.availableFood}</h3>
                {donations.slice(0, 3).map((donation) => (
                <p key={donation.ID}>
                  🍱 {donation.FOOD_NAME} — {donation.QUANTITY} {t.packets}
                </p>
))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

  // =========================
  // HOME PAGE
  // =========================

  if (page === "home") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">FoodRescue</div>

          <div className="nav-links">
            <button onClick={() => setPage("home")}>{t.home}</button>
            <button>{t.how}</button>
            <button>{t.about}</button>
          </div>

          <div className="nav-right">

  <button
    className="login-button"
    onClick={() => setPage("dashboard")}
  >
    {t.dashboard}
  </button>

  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
  >
    <option value="en">English</option>
    <option value="bn">বাংলা</option>
    <option value="hi">हिन्दी</option>
  </select>

  <button
    className="login-button"
    onClick={() => setPage("login")}
  >
    {t.login}
  </button>

</div>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <h1>
              {t.title1}
              <br />
              <span>{t.title2}</span>
            </h1>

            <p>{t.subtitle}</p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => setPage("donate")}
              >
                {t.donate}
              </button>

              <button
                className="secondary-button"
                onClick={() => setPage("receive")}
              >
                {t.receive}
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-icon">🍲</div>
            <h3>{t.rescue}</h3>
            <p>{t.rescueText}</p>
          </div>
        </section>

        <section className="role-section">
          <div className="role-card">
            <div className="card-icon">🤝</div>
            <h3>{t.donors}</h3>
            <p>{t.donorText}</p>
          </div>

          <div className="role-card">
            <div className="card-icon">❤️</div>
            <h3>{t.receivers}</h3>
            <p>{t.receiverText}</p>
          </div>

          <div className="role-card">
            <div className="card-icon">🌍</div>
            <h3>{t.impact}</h3>
            <p>{t.impactText}</p>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <div className="feature-icon">🍱</div>
            <h3>{t.foodRescue}</h3>
            <p>{t.foodRescueText}</p>
          </div>

          <div className="feature-card coming-soon">
            <div className="feature-icon">🤖</div>
            <h3>{t.prediction}</h3>
            <p>{t.predictionText}</p>
            <span>{t.coming}</span>
          </div>
        </section>

        <footer>
          <div className="logo">FoodRescue</div>
          <p>{t.footerText}</p>
        </footer>
      </div>
    );
  }

  // =========================
  // DONATE PAGE
  // =========================

  if (page === "donate") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">FoodRescue</div>

          <div className="nav-right">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </nav>

        <section className="form-page">
          <button className="back-button" onClick={() => setPage("home")}>
            {t.back}
          </button>

          <div className="form-card">
            <div className="form-icon">🍱</div>

            <h1>{t.donorTitle}</h1>

            <form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch("https://foodrescue-backend-2h9k.onrender.com/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FOOD_NAME: form.foodName.value,
          QUANTITY: Number(form.quantity.value),
          FOOD_TYPE: form.donorFoodType.value,
          PICKUP_DATE: form.pickupDate.value,
          PICKUP_FROM: form.pickupFrom.value,
          PICKUP_TO: form.pickupTo.value,
          PICKUP_LOCATION: form.pickupLocation.value,
          CONTACT: form.contact.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Donation failed");
        return;
      }

      alert(t.donationSubmitted);
      form.reset();

    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend. Is the backend running?");
    }
  }}
>
              <div className="form-group">
                <label>{t.foodName}</label>
                <input
                  type="text"
                  name="foodName"
                  placeholder={t.foodNamePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.quantity}</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder={t.quantityPlaceholder}
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.foodType}</label>

                <div className="food-type-options">
                  <label>
                    <input type="radio" name="donorFoodType" value="veg" required />
                    {t.veg}
                  </label>

                  <label>
                    <input type="radio" name="donorFoodType" value="non-veg"/>
                    {t.nonVeg}
                  </label>

                  <label>
                    <input type="radio" name="donorFoodType" value="both" />
                    {t.both}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>{t.pickupDate}</label>
                <input type="date" name="pickupDate" required />
              </div>

              <div className="form-group">
                <label>{t.pickupTime}</label>

                <div className="pickup-time-row">
                  <div className="time-field">
                    <span>{t.from}</span>
                    <input type="time" name="pickupFrom" required />
                  </div>

                  <div className="time-field">
                    <span>{t.to}</span>
                    <input type="time" name="pickupTo" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>{t.location}</label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder={t.locationPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.contact}</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder={t.contactPlaceholder}
                />
              </div>

              <button type="submit" className="submit-button">
                {t.submit}
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  // =========================
  // RECEIVE PAGE
  // =========================

  if (page === "receive") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">FoodRescue</div>

          <div className="nav-right">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </nav>

        <section className="form-page">
          <button className="back-button" onClick={() => setPage("home")}>
            {t.back}
          </button>

          <div className="form-card">
            <div className="form-icon">❤️</div>

            <h1>{t.receiverTitle}</h1>

            <form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch(
        "https://foodrescue-backend-2h9k.onrender.com/api/requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            REQUIRED_QUANTITY: Number(form.requiredQuantity.value),
            FOOD_TYPE: form.receiverFoodType.value,
            LOCATION: form.receiverLocation.value,
            CAN_COLLECT: form.pickupTime.value === "yes",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Food request failed");
        return;
      }

      alert(t.requestSubmitted);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend.");
    }
  }}
>
  <div className="form-group">
    <label>{t.required}</label>
    <input
      type="number"
      name="requiredQuantity"
      placeholder={t.requiredPlaceholder}
      min="1"
      required
    />
  </div>

  <div className="form-group">
    <label>{t.foodType}</label>

    <div className="food-type-options">
      <label>
        <input
          type="radio"
          name="receiverFoodType"
          value="veg"
          required
        />
        {t.veg}
      </label>

      <label>
        <input
          type="radio"
          name="receiverFoodType"
          value="non-veg"
        />
        {t.nonVeg}
      </label>

      <label>
        <input
          type="radio"
          name="receiverFoodType"
          value="both"
        />
        {t.both}
      </label>
    </div>
  </div>

  <div className="form-group">
    <label>{t.receiverLocation}</label>
    <input
      type="text"
      name="receiverLocation"
      placeholder={t.receiverLocationPlaceholder}
      required
    />
  </div>

  <div className="form-group">
    <label>{t.pickup}</label>

    <div className="food-type-options">
      <label>
        <input
          type="radio"
          name="pickupTime"
          value="yes"
          required
        />
        {t.yes}
      </label>

      <label>
        <input
          type="radio"
          name="pickupTime"
          value="no"
        />
        {t.no}
      </label>
    </div>
  </div>

  <button type="submit" className="submit-button">
    {t.request}
  </button>
</form>
          </div>
        </section>
      </div>
    );
  }

  // =========================
  // REGISTER PAGE
  // =========================

  if (page === "register") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">FoodRescue</div>

          <div className="nav-right">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </nav>

        <section className="form-page">
          <button className="back-button" onClick={() => setPage("home")}>
            {t.back}
          </button>

          <div className="form-card">
            <div className="form-icon">👤</div>

            <h1>{t.registerTitle}</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target;
                const email = form.email.value.trim();
                const phone = form.phone.value.trim();

                if (!email && !phone) {
                  alert(t.contactNote);
                  return;
                }

                alert(t.accountCreated);
              }}
            >
              <div className="form-group">
                <label>{t.chooseRole}</label>

                <div className="food-type-options">
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="donor"
                      checked={role === "donor"}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                    {t.donorRole}
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="receiver"
                      checked={role === "receiver"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    {t.receiverRole}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>{t.name}</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.email}</label>
                <input
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label>{t.phone}</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  marginTop: "-5px",
                  marginBottom: "20px",
                  color: "#666",
                }}
              >
                {t.contactNote}
              </p>

              <div className="form-group">
                <label>{t.password}</label>
                <input
                  type="password"
                  placeholder={t.passwordPlaceholder}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                {t.registerButton}
              </button>
            </form>

            <p style={{ textAlign: "center", marginTop: "22px" }}>
              {t.alreadyAccount}{" "}
              <button
                onClick={() => setPage("login")}
                style={{
                  border: "none",
                  background: "none",
                  color: "#16834b",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {t.goLogin}
              </button>
            </p>
          </div>
        </section>
      </div>
    );
  }

  // =========================
  // LOGIN PAGE
  // =========================

  if (page === "login") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">FoodRescue</div>

          <div className="nav-right">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </nav>

        <section className="form-page">
          <button className="back-button" onClick={() => setPage("home")}>
            {t.back}
          </button>

          <div className="form-card">
            <div className="form-icon">🔐</div>

            <h1>{t.loginTitle}</h1>

            <p
              style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "25px",
              }}
            >
              {t.loginNote}
            </p>

            <form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.loginEmail.value.trim();
    const password = form.password.value;

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "https://foodrescue-backend-1bhd.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            EMAIL: email,
            PASSWORD: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Login failed");
        return;
      }

      console.log("LOGIN SUCCESS:", data);

      alert(t.loginSuccess);

      setDashboardRole(data.user.ROLE);
      setPage("dashboard");

    } catch (error) {
      console.error("Login error:", error);
      alert("Cannot connect to backend. Is the backend running?");
    }
  }}
>
  <div className="form-group">
    <label>{t.loginEmail}</label>
    <input
      name="loginEmail"
      type="email"
      placeholder={t.loginEmailPlaceholder}
      required
    />
  </div>

  <div
    style={{
      textAlign: "center",
      margin: "10px 0",
      color: "#777",
      fontWeight: "600",
    }}
  >
    {t.or}
  </div>

  <div className="form-group">
    <label>{t.loginPhone}</label>
    <input
      type="tel"
      placeholder={t.loginPhonePlaceholder}
    />
  </div>

  <div className="form-group">
    <label>{t.password}</label>
    <input
      name="password"
      type="password"
      placeholder={t.passwordPlaceholder}
      required
    />
  </div>

  <button type="submit" className="submit-button">
    {t.loginButton}
  </button>
</form>

            <p style={{ textAlign: "center", marginTop: "22px" }}>
              {t.noAccount}{" "}
              <button
                onClick={() => setPage("register")}
                style={{
                  border: "none",
                  background: "none",
                  color: "#16834b",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {t.createAccount}
              </button>
            </p>
          </div>
        </section>
      </div>
    );
  }

  return null;
}

export default App;
