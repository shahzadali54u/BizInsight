
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import { useState } from "react";
import "./App.css";


const dashboardData = {
  "Last 7 Days": {
    revenue: "$24,580",
    orders: "486",
    customers: "312",
    conversion: "4.8%",
    growth: "+12.5%",
  },
  "Last 30 Days": {
    revenue: "$98,420",
    orders: "1,842",
    customers: "1,126",
    conversion: "5.2%",
    growth: "+18.4%",
  },
  "Last 90 Days": {
    revenue: "$286,750",
    orders: "5,428",
    customers: "3,214",
    conversion: "5.8%",
    growth: "+24.7%",
  },
};

const chartData = {
  "Last 7 Days": [35, 48, 42, 65, 58, 75, 82],
  "Last 30 Days": [45, 58, 52, 70, 65, 78, 88],
  "Last 90 Days": [52, 62, 68, 74, 72, 86, 94],
};

const categoryData = {
  "Last 7 Days": [
    { name: "Electronics", value: 42 },
    { name: "Clothing", value: 28 },
    { name: "Home & Garden", value: 18 },
    { name: "Sports", value: 12 },
  ],
  "Last 30 Days": [
    { name: "Electronics", value: 48 },
    { name: "Clothing", value: 31 },
    { name: "Home & Garden", value: 21 },
    { name: "Sports", value: 15 },
  ],
  "Last 90 Days": [
    { name: "Electronics", value: 55 },
    { name: "Clothing", value: 38 },
    { name: "Home & Garden", value: 27 },
    { name: "Sports", value: 20 },
  ],
};

/* ================= ANALYTICS DATA ================= */

const analyticsData = {
  "Last 7 Days": {
    revenue: [3200, 4100, 3800, 5200, 4700, 6100, 6800],
    orders: [42, 58, 51, 73, 64, 82, 91],
    customers: [28, 35, 32, 45, 41, 52, 60],
  },

  "Last 30 Days": {
    revenue: [4200, 5100, 4800, 6200, 5700, 7100, 7800],
    orders: [55, 68, 61, 79, 72, 88, 96],
    customers: [38, 46, 43, 57, 53, 66, 74],
  },

  "Last 90 Days": {
    revenue: [5200, 6100, 6800, 7200, 6900, 8200, 9400],
    orders: [62, 74, 81, 87, 84, 98, 112],
    customers: [45, 55, 63, 67, 65, 78, 89],
  },
};

const analyticsDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

/* ================= SALES DATA ================= */

const salesData = [
  {
    id: "#ORD-1001",
    customer: "Ali Khan",
    product: "Wireless Headphones",
    category: "Electronics",
    amount: "$129.00",
    date: "Sep 30, 2026",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Ahmed Raza",
    product: "Smart Watch",
    category: "Electronics",
    amount: "$199.00",
    date: "Sep 29, 2026",
    status: "Completed",
  },
  {
    id: "#ORD-1003",
    customer: "Usman Ali",
    product: "Running Shoes",
    category: "Sports",
    amount: "$89.00",
    date: "Sep 28, 2026",
    status: "Pending",
  },
  {
    id: "#ORD-1004",
    customer: "Hamza Ahmed",
    product: "Office Chair",
    category: "Home & Garden",
    amount: "$249.00",
    date: "Sep 27, 2026",
    status: "Completed",
  },
  {
    id: "#ORD-1005",
    customer: "Bilal Khan",
    product: "Denim Jacket",
    category: "Clothing",
    amount: "$79.00",
    date: "Sep 26, 2026",
    status: "Cancelled",
  },
  {
    id: "#ORD-1006",
    customer: "Hassan Shah",
    product: "Bluetooth Speaker",
    category: "Electronics",
    amount: "$149.00",
    date: "Sep 25, 2026",
    status: "Completed",
  },
  {
    id: "#ORD-1007",
    customer: "Saad Ahmed",
    product: "Sports T-Shirt",
    category: "Sports",
    amount: "$49.00",
    date: "Sep 24, 2026",
    status: "Pending",
  },
];

/* ================= CUSTOMER DATA ================= */

const customersData = [
  {
    id: "CUS-001",
    name: "Ali Khan",
    email: "ali.khan@email.com",
    orders: 24,
    spending: "$2,840",
    lastOrder: "Sep 30, 2026",
    segment: "VIP",
    status: "Active",
  },
  {
    id: "CUS-002",
    name: "Ahmed Raza",
    email: "ahmed.raza@email.com",
    orders: 18,
    spending: "$2,150",
    lastOrder: "Sep 29, 2026",
    segment: "Loyal",
    status: "Active",
  },
  {
    id: "CUS-003",
    name: "Usman Ali",
    email: "usman.ali@email.com",
    orders: 12,
    spending: "$1,420",
    lastOrder: "Sep 28, 2026",
    segment: "Regular",
    status: "Active",
  },
  {
    id: "CUS-004",
    name: "Hamza Ahmed",
    email: "hamza.ahmed@email.com",
    orders: 9,
    spending: "$980",
    lastOrder: "Sep 27, 2026",
    segment: "Regular",
    status: "Active",
  },
  {
    id: "CUS-005",
    name: "Bilal Khan",
    email: "bilal.khan@email.com",
    orders: 6,
    spending: "$640",
    lastOrder: "Sep 26, 2026",
    segment: "New",
    status: "Inactive",
  },
  {
    id: "CUS-006",
    name: "Hassan Shah",
    email: "hassan.shah@email.com",
    orders: 21,
    spending: "$2,560",
    lastOrder: "Sep 25, 2026",
    segment: "VIP",
    status: "Active",
  },
  {
    id: "CUS-007",
    name: "Saad Ahmed",
    email: "saad.ahmed@email.com",
    orders: 14,
    spending: "$1,680",
    lastOrder: "Sep 24, 2026",
    segment: "Loyal",
    status: "Active",
  },
  {
    id: "CUS-008",
    name: "Fahad Malik",
    email: "fahad.malik@email.com",
    orders: 4,
    spending: "$420",
    lastOrder: "Sep 20, 2026",
    segment: "New",
    status: "Inactive",
  },
];

/* ================= PRODUCT DATA ================= */

const productsData = [
  {
    id: "PRD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    sales: 129,
    units: 84,
    revenue: "$10,836",
    stock: 42,
    status: "In Stock",
  },
  {
    id: "PRD-002",
    name: "Smart Watch",
    category: "Electronics",
    sales: 199,
    units: 67,
    revenue: "$13,333",
    stock: 28,
    status: "In Stock",
  },
  {
    id: "PRD-003",
    name: "Running Shoes",
    category: "Sports",
    sales: 89,
    units: 56,
    revenue: "$4,984",
    stock: 19,
    status: "Low Stock",
  },
  {
    id: "PRD-004",
    name: "Office Chair",
    category: "Home & Garden",
    sales: 249,
    units: 43,
    revenue: "$10,707",
    stock: 35,
    status: "In Stock",
  },
  {
    id: "PRD-005",
    name: "Denim Jacket",
    category: "Clothing",
    sales: 79,
    units: 31,
    revenue: "$2,449",
    stock: 8,
    status: "Low Stock",
  },
  {
    id: "PRD-006",
    name: "Bluetooth Speaker",
    category: "Electronics",
    sales: 149,
    units: 72,
    revenue: "$10,728",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PRD-007",
    name: "Sports T-Shirt",
    category: "Sports",
    sales: 49,
    units: 91,
    revenue: "$4,459",
    stock: 64,
    status: "In Stock",
  },
  {
    id: "PRD-008",
    name: "Gaming Mouse",
    category: "Electronics",
    sales: 59,
    units: 76,
    revenue: "$4,484",
    stock: 51,
    status: "In Stock",
  },
];

/* ================= DEFAULT SETTINGS ================= */

const defaultSettings = {
  accountName: "BizInsight Admin",
  email: "admin@bizinsight.com",
  dashboardName: "Business Analytics Dashboard",
  theme: "Light",
  emailNotifications: true,
  salesAlerts: true,
  lowStockAlerts: true,
};

/* ================= NOTIFICATION DATA ================= */

const defaultNotifications = [
  {
    id: 1,
    type: "sale",
    icon: "💰",
    title: "New sale received",
    message: "Order #ORD-1001 for Wireless Headphones was completed.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "sale",
    icon: "🛒",
    title: "New order completed",
    message: "Ahmed Raza placed an order for Smart Watch worth $199.",
    time: "18 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "sale",
    icon: "💳",
    title: "New sale received",
    message: "Hassan Shah purchased Bluetooth Speaker for $149.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "stock",
    icon: "⚠️",
    title: "Low stock alert",
    message: "Denim Jacket has only 8 units remaining.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 5,
    type: "stock",
    icon: "📦",
    title: "Low stock alert",
    message: "Running Shoes have only 19 units remaining.",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 6,
    type: "customer",
    icon: "👤",
    title: "New customer added",
    message: "Fahad Malik has recently joined your customer base.",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 7,
    type: "customer",
    icon: "✨",
    title: "New customer activity",
    message: "Bilal Khan has recently joined the customer segment.",
    time: "Yesterday",
    unread: false,
  },
];

function App() {
  /* ================= LOGIN ================= */

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem("bizinsight-auth") === "true";
    } catch (error) {
      return false;
    }
  });

  const [loginEmail, setLoginEmail] = useState(() => {
    try {
      return (
        localStorage.getItem(
          "bizinsight-remembered-email"
        ) || ""
      );
    } catch (error) {
      return "";
    }
  });

  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [rememberMe, setRememberMe] = useState(() => {
    try {
      return (
        localStorage.getItem(
          "bizinsight-remember-me"
        ) === "true"
      );
    } catch (error) {
      return false;
    }
  });

  const [authMode, setAuthMode] = useState("login");
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [hoveredBar, setHoveredBar] = useState(null);

  /* Analytics */
  const [analyticsMetric, setAnalyticsMetric] =
    useState("revenue");

  /* Sales filters */
  const [salesSearch, setSalesSearch] = useState("");
  const [salesCategory, setSalesCategory] =
    useState("All Categories");
  const [salesStatus, setSalesStatus] =
    useState("All Status");

  /* Customer filters */
  const [customerSearch, setCustomerSearch] = useState("");
  const [customerSegment, setCustomerSegment] =
    useState("All Segments");
  const [customerStatus, setCustomerStatus] =
    useState("All Status");

  /* Product filters */
  const [productSearch, setProductSearch] = useState("");
  const [productCategory, setProductCategory] =
    useState("All Categories");
  const [productStatus, setProductStatus] =
    useState("All Status");

  /* ================= SETTINGS ================= */

  const [settings, setSettings] = useState(() => {
    try {
      const savedSettings = localStorage.getItem(
        "bizinsight-settings"
      );

      if (savedSettings) {
        return {
          ...defaultSettings,
          ...JSON.parse(savedSettings),
        };
      }
    } catch (error) {
      console.error(
        "Unable to load settings:",
        error
      );
    }

    return defaultSettings;
  });

  const [savedSettings, setSavedSettings] =
    useState(settings);

  const [settingsMessage, setSettingsMessage] =
    useState("");

  /* ================= NOTIFICATIONS ================= */

  const [notifications, setNotifications] = useState(
    () => {
      try {
        const savedNotifications =
          localStorage.getItem(
            "bizinsight-notifications"
          );

        if (savedNotifications) {
          return JSON.parse(savedNotifications);
        }
      } catch (error) {
        console.error(
          "Unable to load notifications:",
          error
        );
      }

      return defaultNotifications;
    }
  );

  const [showNotifications, setShowNotifications] =
    useState(false);

  const saveNotifications = (updatedNotifications) => {
    setNotifications(updatedNotifications);

    try {
      localStorage.setItem(
        "bizinsight-notifications",
        JSON.stringify(updatedNotifications)
      );
    } catch (error) {
      console.error(
        "Unable to save notifications:",
        error
      );
    }
  };

  const markNotificationAsRead = (id) => {
    const updatedNotifications = notifications.map(
      (notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
            }
          : notification
    );

    saveNotifications(updatedNotifications);
  };

  const markAllNotificationsAsRead = () => {
    const updatedNotifications = notifications.map(
      (notification) => ({
        ...notification,
        unread: false,
      })
    );

    saveNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    saveNotifications([]);
  };

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const visibleNotifications = notifications.filter(
    (notification) => {
      if (
        notification.type === "sale" &&
        !settings.salesAlerts
      ) {
        return false;
      }

      if (
        notification.type === "stock" &&
        !settings.lowStockAlerts
      ) {
        return false;
      }

      if (
        notification.type === "customer" &&
        !settings.emailNotifications
      ) {
        return false;
      }

      return true;
    }
  );

  const visibleUnreadCount =
    visibleNotifications.filter(
      (notification) => notification.unread
    ).length;

  /* ================= NOTIFICATION CENTER ================= */

  const NotificationCenter = () => {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={() =>
            setShowNotifications(
              !showNotifications
            )
          }
          aria-label="Notifications"
          style={{
            position: "relative",
            width: "42px",
            height: "42px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            background:
              settings.theme === "Dark"
                ? "#1f2937"
                : "#ffffff",
            color:
              settings.theme === "Dark"
                ? "#ffffff"
                : "#374151",
            fontSize: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🔔

          {visibleUnreadCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                minWidth: "19px",
                height: "19px",
                padding: "0 5px",
                borderRadius: "999px",
                background: "#ef4444",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ffffff",
                boxSizing: "border-box",
              }}
            >
              {visibleUnreadCount > 9
                ? "9+"
                : visibleUnreadCount}
            </span>
          )}
        </button>

        {showNotifications && (
          <>
            <div
              onClick={() =>
                setShowNotifications(false)
              }
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "52px",
                right: 0,
                width: "390px",
                maxWidth:
                  "calc(100vw - 30px)",
                background:
                  settings.theme === "Dark"
                    ? "#1f2937"
                    : "#ffffff",
                border:
                  settings.theme === "Dark"
                    ? "1px solid #374151"
                    : "1px solid #e5e7eb",
                borderRadius: "14px",
                boxShadow:
                  "0 20px 50px rgba(15, 23, 42, 0.18)",
                zIndex: 1000,
                overflow: "hidden",
              }}
            >
              {/* NOTIFICATION HEADER */}

              <div
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",
                  gap: "12px",
                  borderBottom:
                    settings.theme === "Dark"
                      ? "1px solid #374151"
                      : "1px solid #e5e7eb",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      color:
                        settings.theme ===
                        "Dark"
                          ? "#ffffff"
                          : "#111827",
                    }}
                  >
                    Notifications
                  </h3>

                  <span
                    style={{
                      display: "block",
                      marginTop: "4px",
                      fontSize: "12px",
                      color:
                        settings.theme ===
                        "Dark"
                          ? "#9ca3af"
                          : "#6b7280",
                    }}
                  >
                    {visibleUnreadCount} unread
                    notification
                    {visibleUnreadCount === 1
                      ? ""
                      : "s"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={
                    markAllNotificationsAsRead
                  }
                  disabled={
                    visibleUnreadCount === 0
                  }
                  style={{
                    border: "none",
                    background:
                      "transparent",
                    color:
                      visibleUnreadCount > 0
                        ? "#2563eb"
                        : "#9ca3af",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor:
                      visibleUnreadCount > 0
                        ? "pointer"
                        : "default",
                    padding: 0,
                  }}
                >
                  Mark all as read
                </button>
              </div>

              {/* NOTIFICATION LIST */}

              <div
                style={{
                  maxHeight: "390px",
                  overflowY: "auto",
                }}
              >
                {visibleNotifications.length >
                0 ? (
                  visibleNotifications.map(
                    (notification) => (
                      <div
                        key={notification.id}
                        onClick={() =>
                          markNotificationAsRead(
                            notification.id
                          )
                        }
                        style={{
                          display: "flex",
                          gap: "12px",
                          padding:
                            "14px 18px",
                          borderBottom:
                            settings.theme ===
                            "Dark"
                              ? "1px solid #374151"
                              : "1px solid #f1f5f9",
                          background:
                            notification.unread
                              ? settings.theme ===
                                "Dark"
                                ? "#273449"
                                : "#f8fbff"
                              : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            minWidth: "38px",
                            borderRadius:
                              "10px",
                            background:
                              notification.type ===
                              "sale"
                                ? "#dcfce7"
                                : notification.type ===
                                  "stock"
                                ? "#fef3c7"
                                : "#dbeafe",
                            display: "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            fontSize: "18px",
                          }}
                        >
                          {
                            notification.icon
                          }
                        </div>

                        <div
                          style={{
                            flex: 1,
                            minWidth: 0,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems:
                                "flex-start",
                              justifyContent:
                                "space-between",
                              gap: "8px",
                            }}
                          >
                            <strong
                              style={{
                                fontSize:
                                  "13px",
                                color:
                                  settings.theme ===
                                  "Dark"
                                    ? "#ffffff"
                                    : "#111827",
                              }}
                            >
                              {
                                notification.title
                              }
                            </strong>

                            {notification.unread && (
                              <span
                                style={{
                                  width: "7px",
                                  height: "7px",
                                  minWidth: "7px",
                                  borderRadius:
                                    "50%",
                                  background:
                                    "#2563eb",
                                  marginTop:
                                    "5px",
                                }}
                              />
                            )}
                          </div>

                          <p
                            style={{
                              margin:
                                "5px 0 4px",
                              fontSize:
                                "12px",
                              lineHeight:
                                "1.5",
                              color:
                                settings.theme ===
                                "Dark"
                                  ? "#d1d5db"
                                  : "#64748b",
                            }}
                          >
                            {
                              notification.message
                            }
                          </p>

                          <span
                            style={{
                              fontSize:
                                "11px",
                              color:
                                settings.theme ===
                                "Dark"
                                  ? "#9ca3af"
                                  : "#94a3b8",
                            }}
                          >
                            {
                              notification.time
                            }
                          </span>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div
                    style={{
                      padding:
                        "42px 20px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "34px",
                        marginBottom:
                          "10px",
                      }}
                    >
                      🔕
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginBottom:
                          "6px",
                        color:
                          settings.theme ===
                          "Dark"
                            ? "#ffffff"
                            : "#111827",
                      }}
                    >
                      No notifications
                    </strong>

                    <span
                      style={{
                        fontSize:
                          "12px",
                        color:
                          settings.theme ===
                          "Dark"
                            ? "#9ca3af"
                            : "#6b7280",
                      }}
                    >
                      You're all caught up.
                    </span>
                  </div>
                )}
              </div>

              {/* NOTIFICATION FOOTER */}

              <div
                style={{
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",
                  gap: "12px",
                  borderTop:
                    settings.theme === "Dark"
                      ? "1px solid #374151"
                      : "1px solid #e5e7eb",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowNotifications(false)
                  }
                  style={{
                    border: "none",
                    background:
                      "transparent",
                    color:
                      settings.theme ===
                      "Dark"
                        ? "#d1d5db"
                        : "#64748b",
                    fontSize: "12px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={
                    clearAllNotifications
                  }
                  disabled={
                    notifications.length ===
                    0
                  }
                  style={{
                    border: "none",
                    background:
                      "transparent",
                    color:
                      notifications.length >
                      0
                        ? "#dc2626"
                        : "#9ca3af",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor:
                      notifications.length >
                      0
                        ? "pointer"
                        : "default",
                    padding: 0,
                  }}
                >
                  Clear all
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  /* ================= LOGIN HANDLERS ================= */

  const handleLogin = (e) => {
    e.preventDefault();

    setLoginError("");

    const email = loginEmail.trim().toLowerCase();

    if (!email || !loginPassword) {
      setLoginError(
        "Please enter your email and password."
      );
      return;
    }

    if (
      email === "admin@bizinsight.com" &&
      loginPassword === "admin123"
    ) {
      try {
        localStorage.setItem(
          "bizinsight-auth",
          "true"
        );

        if (rememberMe) {
          localStorage.setItem(
            "bizinsight-remember-me",
            "true"
          );

          localStorage.setItem(
            "bizinsight-remembered-email",
            email
          );
        } else {
          localStorage.removeItem(
            "bizinsight-remember-me"
          );

          localStorage.removeItem(
            "bizinsight-remembered-email"
          );
        }
      } catch (error) {
        console.error(
          "Unable to save login state:",
          error
        );
      }

      setIsLoggedIn(true);
      setLoginError("");
      setLoginPassword("");
      setShowPassword(false);
      setAuthMode("login");
      setActivePage("Dashboard");
    } else {
      setLoginError(
        "Invalid email or password. Please use the demo credentials."
      );
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(
        "bizinsight-auth"
      );
    } catch (error) {
      console.error(
        "Unable to clear login state:",
        error
      );
    }

    setIsLoggedIn(false);
    setLoginPassword("");
    setLoginError("");
    setShowPassword(false);
    setAuthMode("login");
    setResetEmail("");
    setResetMessage("");
    setShowNotifications(false);
    setActivePage("Dashboard");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    setResetMessage("");

    const email = resetEmail.trim().toLowerCase();

    if (!email) {
      setResetMessage(
        "Please enter your email address."
      );
      return;
    }

    if (email !== "admin@bizinsight.com") {
      setResetMessage(
        "No account was found with this email address."
      );
      return;
    }

    setResetMessage(
      "Password reset instructions have been sent to your email. For this demo, use admin123 as the password."
    );
  };

  const goToForgotPassword = () => {
    setAuthMode("forgot");
    setLoginError("");
    setResetMessage("");
    setResetEmail(loginEmail);
  };

  const goBackToLogin = () => {
    setAuthMode("login");
    setLoginError("");
    setResetMessage("");
  };

  const currentData = dashboardData[dateRange];
  const currentChart = chartData[dateRange];
  const currentCategories = categoryData[dateRange];
  const currentAnalytics = analyticsData[dateRange];

  const metricData =
    currentAnalytics[analyticsMetric];

  const metricLabels = {
    revenue: "Revenue",
    orders: "Orders",
    customers: "Customers",
  };

  /* ================= SALES FILTERING ================= */

  const filteredSales = salesData.filter((sale) => {
    const search = salesSearch
      .toLowerCase()
      .trim();

    const matchesSearch =
      search === "" ||
      sale.id
        .toLowerCase()
        .includes(search) ||
      sale.customer
        .toLowerCase()
        .includes(search) ||
      sale.product
        .toLowerCase()
        .includes(search);

    const matchesCategory =
      salesCategory === "All Categories" ||
      sale.category === salesCategory;

    const matchesStatus =
      salesStatus === "All Status" ||
      sale.status === salesStatus;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  /* ================= CUSTOMER FILTERING ================= */

  const filteredCustomers =
    customersData.filter((customer) => {
      const search = customerSearch
        .toLowerCase()
        .trim();

      const matchesSearch =
        search === "" ||
        customer.id
          .toLowerCase()
          .includes(search) ||
        customer.name
          .toLowerCase()
          .includes(search) ||
        customer.email
          .toLowerCase()
          .includes(search);

      const matchesSegment =
        customerSegment === "All Segments" ||
        customer.segment === customerSegment;

      const matchesStatus =
        customerStatus === "All Status" ||
        customer.status === customerStatus;

      return (
        matchesSearch &&
        matchesSegment &&
        matchesStatus
      );
    });

  /* ================= PRODUCT FILTERING ================= */

  const filteredProducts =
    productsData.filter((product) => {
      const search = productSearch
        .toLowerCase()
        .trim();

      const matchesSearch =
        search === "" ||
        product.id
          .toLowerCase()
          .includes(search) ||
        product.name
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        productCategory === "All Categories" ||
        product.category === productCategory;

      const matchesStatus =
        productStatus === "All Status" ||
        product.status === productStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });

  /* ================= SALES CSV EXPORT ================= */

  const handleExport = () => {
    if (filteredSales.length === 0) {
      alert(
        "No sales data available to export."
      );
      return;
    }

    const headers = [
      "Order ID",
      "Customer",
      "Product",
      "Category",
      "Amount",
      "Date",
      "Status",
    ];

    const rows = filteredSales.map((sale) => [
      sale.id,
      sale.customer,
      sale.product,
      sale.category,
      sale.amount,
      sale.date,
      sale.status,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value).replace(
                /"/g,
                '""'
              )}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "bizinsight-sales-data.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const clearSalesFilters = () => {
    setSalesSearch("");
    setSalesCategory("All Categories");
    setSalesStatus("All Status");
  };

  /* ================= CUSTOMER FILTER HELPERS ================= */

  const clearCustomerFilters = () => {
    setCustomerSearch("");
    setCustomerSegment("All Segments");
    setCustomerStatus("All Status");
  };

  const getCustomerStatusClass = (
    status
  ) => {
    if (status === "Active") {
      return "customer-status active";
    }

    return "customer-status inactive";
  };

  const getCustomerSegmentClass = (
    segment
  ) => {
    if (segment === "VIP") {
      return "customer-segment vip";
    }

    if (segment === "Loyal") {
      return "customer-segment loyal";
    }

    if (segment === "New") {
      return "customer-segment new";
    }

    return "customer-segment regular";
  };

  /* ================= PRODUCT HELPERS ================= */

  const clearProductFilters = () => {
    setProductSearch("");
    setProductCategory("All Categories");
    setProductStatus("All Status");
  };

  const getProductStatusClass = (
    status
  ) => {
    if (status === "In Stock") {
      return "product-status in-stock";
    }

    if (status === "Low Stock") {
      return "product-status low-stock";
    }

    return "product-status out-of-stock";
  };

  /* ================= PRODUCT CSV EXPORT ================= */

  const handleProductExport = () => {
    if (filteredProducts.length === 0) {
      alert(
        "No product data available to export."
      );
      return;
    }

    const headers = [
      "Product ID",
      "Product",
      "Category",
      "Price",
      "Units Sold",
      "Revenue",
      "Stock",
      "Status",
    ];

    const rows = filteredProducts.map(
      (product) => [
        product.id,
        product.name,
        product.category,
        "$" + product.sales,
        product.units,
        product.revenue,
        product.stock,
        product.status,
      ]
    );

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value).replace(
                /"/g,
                '""'
              )}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "bizinsight-products-data.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  /* ================= SETTINGS HANDLERS ================= */

  const handleSettingsChange = (
    field,
    value
  ) => {
    setSettings((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSettingsMessage("");
  };

  const handleSaveSettings = () => {
    try {
      localStorage.setItem(
        "bizinsight-settings",
        JSON.stringify(settings)
      );

      setSavedSettings(settings);

      setSettingsMessage(
        "Settings saved successfully."
      );

      setTimeout(() => {
        setSettingsMessage("");
      }, 3000);
    } catch (error) {
      console.error(
        "Unable to save settings:",
        error
      );

      setSettingsMessage(
        "Unable to save settings. Please try again."
      );
    }
  };

  const handleResetSettings = () => {
    setSettings(defaultSettings);

    setSettingsMessage(
      "Settings have been reset. Click Save Settings to keep these changes."
    );

    setTimeout(() => {
      setSettingsMessage("");
    }, 4000);
  };

  const handleThemeChange = (theme) => {
    handleSettingsChange(
      "theme",
      theme
    );
  };

  const navItems = [
    "Dashboard",
    "Sales",
    "Analytics",
    "Customers",
    "Products",
    "Settings",
  ];

  const getStatusClass = (status) => {
    if (status === "Completed") {
      return "status completed";
    }

    if (status === "Pending") {
      return "status pending";
    }

    return "status cancelled";
  };

  const KpiCard = ({
    icon,
    title,
    value,
    trend,
    trendType = "positive",
  }) => {
    const trendClass =
      "trend " + trendType;

    const trendArrow =
      trendType === "positive"
        ? "↗"
        : "↘";

    return (
      <div className="card kpi-card">
        <div className="kpi-top">
          <div className="kpi-icon">
            {icon}
          </div>

          <span className={trendClass}>
            {trendArrow} {trend}
          </span>
        </div>

        <div className="kpi-content">
          <p>{title}</p>
          <h2>{value}</h2>
        </div>

        <span className="kpi-period">
          vs previous period
        </span>
      </div>
    );
  };

  /* ================= LOGIN SCREEN ================= */

  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #eef2ff 100%)",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            background: "#ffffff",
            borderRadius: "18px",
            padding: "40px",
            boxSizing: "border-box",
            boxShadow:
              "0 20px 60px rgba(15, 23, 42, 0.12)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 16px",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, #2563eb, #4f46e5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "700",
                boxShadow:
                  "0 10px 25px rgba(37, 99, 235, 0.25)",
              }}
            >
              B
            </div>

            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "30px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              BizInsight
            </h1>

            <p
              style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Business Analytics Dashboard
            </p>
          </div>

          {/* ================= FORGOT PASSWORD ================= */}

          {authMode === "forgot" ? (
            <>
              <div
                style={{
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 8px",
                    fontSize: "24px",
                    color: "#111827",
                  }}
                >
                  Forgot Password?
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Enter your email address and
                  we will help you reset your
                  password.
                </p>
              </div>

              <form
                onSubmit={
                  handleForgotPassword
                }
              >
                <div
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => {
                      setResetEmail(
                        e.target.value
                      );
                      setResetMessage("");
                    }}
                    required
                    autoComplete="email"
                    style={{
                      width: "100%",
                      boxSizing:
                        "border-box",
                      padding: "13px 14px",
                      border:
                        "1px solid #d1d5db",
                      borderRadius: "9px",
                      fontSize: "14px",
                      color: "#111827",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  />
                </div>

                {resetMessage && (
                  <div
                    style={{
                      background:
                        resetMessage.includes(
                          "No account"
                        )
                          ? "#fef2f2"
                          : "#ecfdf5",
                      color:
                        resetMessage.includes(
                          "No account"
                        )
                          ? "#b91c1c"
                          : "#047857",
                      border:
                        resetMessage.includes(
                          "No account"
                        )
                          ? "1px solid #fecaca"
                          : "1px solid #a7f3d0",
                      padding: "12px 14px",
                      borderRadius: "9px",
                      marginBottom: "20px",
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {resetMessage}
                  </div>
                )}

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "none",
                    borderRadius: "9px",
                    background:
                      "linear-gradient(135deg, #2563eb, #4f46e5)",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow:
                      "0 8px 20px rgba(37, 99, 235, 0.2)",
                  }}
                >
                  Send Reset Instructions
                </button>
              </form>

              <button
                type="button"
                onClick={
                  goBackToLogin
                }
                style={{
                  width: "100%",
                  marginTop: "14px",
                  padding: "13px",
                  border:
                    "1px solid #d1d5db",
                  borderRadius: "9px",
                  background: "#ffffff",
                  color: "#374151",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                ← Back to Login
              </button>

              <div
                style={{
                  marginTop: "24px",
                  padding: "15px",
                  background: "#f8fafc",
                  border:
                    "1px solid #e2e8f0",
                  borderRadius: "9px",
                  fontSize: "13px",
                  color: "#475569",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#1e293b",
                  }}
                >
                  Demo Account
                </strong>

                <div>
                  admin@bizinsight.com
                </div>
              </div>
            </>
          ) : (
            /* ================= LOGIN FORM ================= */
            <>
              <div
                style={{
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 8px",
                    fontSize: "24px",
                    color: "#111827",
                  }}
                >
                  Welcome Back
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  Sign in to access your
                  business dashboard.
                </p>
              </div>

              <form onSubmit={handleLogin}>
                {/* EMAIL */}

                <div
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => {
                      setLoginEmail(
                        e.target.value
                      );
                      setLoginError("");
                    }}
                    required
                    autoComplete="email"
                    style={{
                      width: "100%",
                      boxSizing:
                        "border-box",
                      padding: "13px 14px",
                      border:
                        "1px solid #d1d5db",
                      borderRadius: "9px",
                      fontSize: "14px",
                      color: "#111827",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  />
                </div>

                {/* PASSWORD */}

                <div
                  style={{
                    marginBottom: "12px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Password
                  </label>

                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      value={
                        loginPassword
                      }
                      onChange={(e) => {
                        setLoginPassword(
                          e.target.value
                        );
                        setLoginError("");
                      }}
                      required
                      autoComplete="current-password"
                      style={{
                        width: "100%",
                        boxSizing:
                          "border-box",
                        padding:
                          "13px 75px 13px 14px",
                        border:
                          "1px solid #d1d5db",
                        borderRadius: "9px",
                        fontSize: "14px",
                        color: "#111827",
                        outline: "none",
                        background:
                          "#ffffff",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      style={{
                        position:
                          "absolute",
                        right: "10px",
                        top: "50%",
                        transform:
                          "translateY(-50%)",
                        border: "none",
                        background:
                          "transparent",
                        cursor:
                          "pointer",
                        color:
                          "#2563eb",
                        fontWeight:
                          "600",
                        fontSize:
                          "13px",
                      }}
                    >
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </button>
                  </div>
                </div>

                {/* REMEMBER ME + FORGOT PASSWORD */}

                <div
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: "8px",
                      color: "#475569",
                      fontSize:
                        "13px",
                      cursor:
                        "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        rememberMe
                      }
                      onChange={(e) =>
                        setRememberMe(
                          e.target
                            .checked
                        )
                      }
                      style={{
                        width:
                          "16px",
                        height:
                          "16px",
                        cursor:
                          "pointer",
                      }}
                    />

                    Remember Me
                  </label>

                  <button
                    type="button"
                    onClick={
                      goToForgotPassword
                    }
                    style={{
                      border:
                        "none",
                      background:
                        "transparent",
                      color:
                        "#2563eb",
                      fontSize:
                        "13px",
                      fontWeight:
                        "600",
                      cursor:
                        "pointer",
                      padding: 0,
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* ERROR */}

                {loginError && (
                  <div
                    style={{
                      background:
                        "#fef2f2",
                      color:
                        "#b91c1c",
                      border:
                        "1px solid #fecaca",
                      padding:
                        "12px 14px",
                      borderRadius:
                        "9px",
                      marginBottom:
                        "20px",
                      fontSize:
                        "13px",
                      lineHeight:
                        "1.5",
                    }}
                  >
                    {loginError}
                  </div>
                )}

                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "none",
                    borderRadius: "9px",
                    background:
                      "linear-gradient(135deg, #2563eb, #4f46e5)",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow:
                      "0 8px 20px rgba(37, 99, 235, 0.2)",
                  }}
                >
                  Sign In
                </button>
              </form>

              {/* DEMO CREDENTIALS */}

              <div
                style={{
                  marginTop: "24px",
                  padding: "15px",
                  background: "#f8fafc",
                  border:
                    "1px solid #e2e8f0",
                  borderRadius: "9px",
                  fontSize: "13px",
                  color: "#475569",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom:
                      "8px",
                    color:
                      "#1e293b",
                  }}
                >
                  Demo Credentials
                </strong>

                <div
                  style={{
                    marginBottom:
                      "4px",
                  }}
                >
                  Email:
                  admin@bizinsight.com
                </div>

                <div>
                  Password: admin123
                </div>
              </div>
            </>
          )}

          <p
            style={{
              textAlign: "center",
              margin: "24px 0 0",
              color: "#94a3b8",
              fontSize: "12px",
            }}
          >
            BizInsight Analytics • Admin Portal
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="app"
      style={
        settings.theme === "Dark"
          ? {
              backgroundColor: "#111827",
              color: "#f9fafb",
            }
          : {}
      }
    >
      {/* ================= SIDEBAR ================= */}

      <aside
  className={
    mobileSidebarOpen
      ? "sidebar mobile-open"
      : "sidebar"
  }
>
        <h2 className="logo">
          BizInsight
        </h2>

        <nav>
          {navItems.map((item) => (
            <a
              key={item}
              className={
                activePage === item
                  ? "active"
                  : ""
              }
             onClick={() => {
  setActivePage(item);
  setShowNotifications(false);
  setMobileSidebarOpen(false);
}}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <a
           onClick={() => {
  setActivePage("Settings");
  setShowNotifications(false);
  setMobileSidebarOpen(false);
}}
          >
            Help & Support
          </a>

          <a
            onClick={handleLogout}
            style={{
              cursor: "pointer",
            }}
          >
            Logout
          </a>
        </div>
      </aside>
      {mobileSidebarOpen && (
  <div
    className="sidebar-overlay"
    onClick={() => setMobileSidebarOpen(false)}
  />
)}

      <main className="main-content">
        {/* ================= DASHBOARD ================= */}

        {activePage === "Dashboard" && (
          <>
            <div className="topbar">
              <button
  type="button"
  className="mobile-menu-button"
  onClick={() =>
    setMobileSidebarOpen(!mobileSidebarOpen)
  }
  aria-label="Toggle menu"
>
  ☰
</button>
              <div>
                <h1>
                  {settings.dashboardName ||
                    "Dashboard"}
                </h1>

                <p>
                  Welcome back! Here is your
                  business overview.
                </p>
              </div>

              <div className="topbar-actions">
                <select
                  className="date-filter"
                  value={dateRange}
                  onChange={(e) => {
                    setDateRange(
                      e.target.value
                    );
                    setHoveredBar(null);
                  }}
                >
                  <option>
                    Last 7 Days
                  </option>
                  <option>
                    Last 30 Days
                  </option>
                  <option>
                    Last 90 Days
                  </option>
                </select>

                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={() =>
                    setActivePage(
                      "Settings"
                    )
                  }
                >
                  {settings.accountName ||
                    "Admin"}
                </button>
              </div>
            </div>

            <div className="cards">
              <KpiCard
                icon="💰"
                title="Total Revenue"
                value={
                  currentData.revenue
                }
                trend={
                  currentData.growth
                }
              />

              <KpiCard
                icon="🛒"
                title="Total Orders"
                value={
                  currentData.orders
                }
                trend="+8.2%"
              />

              <KpiCard
                icon="👥"
                title="Customers"
                value={
                  currentData.customers
                }
                trend="+10.7%"
              />

              <KpiCard
                icon="📈"
                title="Conversion Rate"
                value={
                  currentData.conversion
                }
                trend="+1.4%"
              />
            </div>

            <div className="section">
              <h2>
                Revenue Overview
              </h2>

              <p>
                Revenue performance for{" "}
                {dateRange.toLowerCase()}.
              </p>

              <div className="chart-placeholder">
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart
                    data={currentChart.map((value, index) => ({
                      day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
                      sales: value * 100,
                    }))}
                    margin={{ top: 15, right: 15, left: 5, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient
                        id="salesGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2563eb"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2563eb"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />

                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    <YAxis
                      width={65}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />

                    <Tooltip
                      formatter={(value) => [
                        `$${Number(value).toLocaleString()}`,
                        "Sales",
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="#2563eb"
                      strokeWidth={3}
                      fill="url(#salesGradient)"
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bottom-grid">
              <div className="section">
                <h2>
                  Sales by Category
                </h2>

                <p>
                  Category performance for{" "}
                  {dateRange.toLowerCase()}.
                </p>

                {currentCategories.map(
                  (category) => (
                    <div
                      className="category"
                      key={category.name}
                    >
                      <div className="category-info">
                        <strong>
                          {category.name}
                        </strong>

                        <span>
                          {category.value}%
                        </span>
                      </div>

                      <div className="progress">
                        <div
                          style={{
                            width:
                              category.value +
                              "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="section">
                <h2>
                  Recent Transactions
                </h2>

                <p>
                  Latest business
                  transactions.
                </p>

                <div className="transaction">
                  <div>
                    <strong>
                      Wireless Headphones
                    </strong>
                    <span>
                      Ali Khan
                    </span>
                  </div>
                  <strong>+$129</strong>
                </div>

                <div className="transaction">
                  <div>
                    <strong>
                      Smart Watch
                    </strong>
                    <span>
                      Ahmed Raza
                    </span>
                  </div>
                  <strong>+$199</strong>
                </div>

                <div className="transaction">
                  <div>
                    <strong>
                      Running Shoes
                    </strong>
                    <span>
                      Usman Ali
                    </span>
                  </div>
                  <strong>+$89</strong>
                </div>

                <div className="transaction">
                  <div>
                    <strong>
                      Office Chair
                    </strong>
                    <span>
                      Hamza Ahmed
                    </span>
                  </div>
                  <strong>+$249</strong>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ================= SALES ================= */}

        {activePage === "Sales" && (
          <>
            <div className="topbar">
            <button
  type="button"
  className="mobile-menu-button"
  onClick={() =>
    setMobileSidebarOpen(!mobileSidebarOpen)
  }
  aria-label="Toggle menu"
>
  ☰
</button>
              <div>
                <h1>Sales</h1>

                <p>
                  Track and manage your sales
                  performance.
                </p>
              </div>

              <div className="topbar-actions">
                <select
                  className="date-filter"
                  value={dateRange}
                  onChange={(e) => {
                    setDateRange(
                      e.target.value
                    );
                    setHoveredBar(null);
                  }}
                >
                  <option>
                    Last 7 Days
                  </option>
                  <option>
                    Last 30 Days
                  </option>
                  <option>
                    Last 90 Days
                  </option>
                </select>

                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={() =>
                    setActivePage(
                      "Settings"
                    )
                  }
                >
                  {settings.accountName ||
                    "Admin"}
                </button>
              </div>
            </div>

            <div className="cards">
              <KpiCard
                icon="💵"
                title="Total Sales"
                value={
                  currentData.revenue
                }
                trend={
                  currentData.growth
                }
              />

              <KpiCard
                icon="🛍️"
                title="Total Orders"
                value={
                  currentData.orders
                }
                trend="+8.2%"
              />

              <KpiCard
                icon="💳"
                title="Average Order"
                value="$53.43"
                trend="+5.6%"
              />

              <KpiCard
                icon="🎯"
                title="Conversion Rate"
                value={
                  currentData.conversion
                }
                trend="+1.4%"
              />
            </div>

            <div className="section">
              <h2>
                Sales Overview
              </h2>

              <p>
                Sales performance for{" "}
                {dateRange.toLowerCase()}.
              </p>

              <div className="chart-placeholder">
                <div className="bars">
                  {currentChart.map(
                    (value, index) => (
                      <div
                        key={index}
                        className={
                          hoveredBar ===
                          index
                            ? "chart-bar active-bar"
                            : "chart-bar"
                        }
                        style={{
                          height:
                            value + "%",
                        }}
                        onMouseEnter={() =>
                          setHoveredBar(
                            index
                          )
                        }
                        onMouseLeave={() =>
                          setHoveredBar(
                            null
                          )
                        }
                      >
                        {hoveredBar ===
                          index && (
                          <div className="chart-tooltip">
                            <strong>
                              $
                              {value *
                                100}
                            </strong>

                            <span>
                              {
                                [
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday",
                                  "Saturday",
                                  "Sunday",
                                ][index]
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>

                <div className="months">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* SALES TABLE */}

            <div className="section sales-table-section">
              <div className="sales-table-header">
                <div>
                  <h2>
                    Recent Sales
                  </h2>

                  <p>
                    Detailed list of recent
                    sales transactions.
                  </p>
                </div>

                <button
                  className="export-button"
                  onClick={handleExport}
                >
                  Export CSV
                </button>
              </div>

              <div className="sales-filters">
                <div className="search-box">
                  <span>🔎</span>

                  <input
                    type="text"
                    placeholder="Search order, customer or product..."
                    value={salesSearch}
                    onChange={(e) =>
                      setSalesSearch(
                        e.target.value
                      )
                    }
                  />
                </div>

                <select
                  className="sales-filter"
                  value={salesCategory}
                  onChange={(e) =>
                    setSalesCategory(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Categories
                  </option>
                  <option>
                    Electronics
                  </option>
                  <option>
                    Clothing
                  </option>
                  <option>
                    Home & Garden
                  </option>
                  <option>
                    Sports
                  </option>
                </select>

                <select
                  className="sales-filter"
                  value={salesStatus}
                  onChange={(e) =>
                    setSalesStatus(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Status
                  </option>
                  <option>
                    Completed
                  </option>
                  <option>
                    Pending
                  </option>
                  <option>
                    Cancelled
                  </option>
                </select>

                <button
                  className="clear-filters"
                  onClick={
                    clearSalesFilters
                  }
                >
                  Clear
                </button>
              </div>

              <div className="sales-results-info">
                <span>
                  Showing{" "}
                  <strong>
                    {
                      filteredSales.length
                    }
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {salesData.length}
                  </strong>{" "}
                  sales
                </span>
              </div>

              <div className="table-container">
                <table className="sales-table">
                  <thead>
                    <tr>
                      <th>
                        Order ID
                      </th>
                      <th>
                        Customer
                      </th>
                      <th>
                        Product
                      </th>
                      <th>
                        Category
                      </th>
                      <th>
                        Amount
                      </th>
                      <th>
                        Date
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredSales.length >
                    0 ? (
                      filteredSales.map(
                        (sale) => (
                          <tr
                            key={
                              sale.id
                            }
                          >
                            <td>
                              {sale.id}
                            </td>

                            <td>
                              {
                                sale.customer
                              }
                            </td>

                            <td>
                              {
                                sale.product
                              }
                            </td>

                            <td>
                              {
                                sale.category
                              }
                            </td>

                            <td>
                              <strong>
                                {
                                  sale.amount
                                }
                              </strong>
                            </td>

                            <td>
                              {sale.date}
                            </td>

                            <td>
                              <span
                                className={getStatusClass(
                                  sale.status
                                )}
                              >
                                {
                                  sale.status
                                }
                              </span>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="no-results"
                        >
                          <div>
                            <span>
                              🔍
                            </span>

                            <strong>
                              No sales found
                            </strong>

                            <p>
                              Try changing
                              your search
                              or filters.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* ================= ANALYTICS ================= */}

       {activePage === "Analytics" && (
  <>
    <div className="topbar">

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() =>
          setMobileSidebarOpen(!mobileSidebarOpen)
        }
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div>
        <h1>
          Analytics
        </h1>

                <p>
                  Understand your business
                  performance and trends.
                </p>
              </div>

              <div className="topbar-actions">
                <select
                  className="date-filter"
                  value={dateRange}
                  onChange={(e) => {
                    setDateRange(
                      e.target.value
                    );
                  }}
                >
                  <option>
                    Last 7 Days
                  </option>
                  <option>
                    Last 30 Days
                  </option>
                  <option>
                    Last 90 Days
                  </option>
                </select>

                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={() =>
                    setActivePage(
                      "Settings"
                    )
                  }
                >
                  {settings.accountName ||
                    "Admin"}
                </button>
              </div>
            </div>

            <div className="analytics-stats">
              <div>
                <span>
                  Total Revenue
                </span>
                <strong>
                  {currentData.revenue}
                </strong>
              </div>

              <div>
                <span>
                  Total Orders
                </span>
                <strong>
                  {currentData.orders}
                </strong>
              </div>

              <div>
                <span>
                  Total Customers
                </span>
                <strong>
                  {currentData.customers}
                </strong>
              </div>

              <div>
                <span>
                  Conversion Rate
                </span>
                <strong>
                  {currentData.conversion}
                </strong>
              </div>
            </div>

            <div className="section analytics-chart-section">
              <div className="analytics-chart-header">
                <div>
                  <h2>
                    Performance Trend
                  </h2>

                  <p>
                    {
                      metricLabels[
                        analyticsMetric
                      ]
                    }{" "}
                    performance for{" "}
                    {dateRange.toLowerCase()}.
                  </p>
                </div>

                <div className="analytics-controls">
                  <button
                    className={
                      analyticsMetric ===
                      "revenue"
                        ? "metric-button active"
                        : "metric-button"
                    }
                    onClick={() => {
                      setAnalyticsMetric(
                        "revenue"
                      );
                    }}
                  >
                    Revenue
                  </button>

                  <button
                    className={
                      analyticsMetric ===
                      "orders"
                        ? "metric-button active"
                        : "metric-button"
                    }
                    onClick={() => {
                      setAnalyticsMetric(
                        "orders"
                      );
                    }}
                  >
                    Orders
                  </button>

                  <button
                    className={
                      analyticsMetric ===
                      "customers"
                        ? "metric-button active"
                        : "metric-button"
                    }
                    onClick={() => {
                      setAnalyticsMetric(
                        "customers"
                      );
                    }}
                  >
                    Customers
                  </button>
                </div>
              </div>

              <div className="analytics-chart">
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart
                    data={metricData.map((value, index) => ({
                      day: analyticsDays[index],
                      value,
                    }))}
                    margin={{ top: 15, right: 15, left: 5, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient
                        id="analyticsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#4f46e5"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4f46e5"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />

                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    <YAxis
                      width={65}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      tickFormatter={(value) =>
                        analyticsMetric === "revenue"
                          ? `$${value.toLocaleString()}`
                          : value.toLocaleString()
                      }
                    />

                    <Tooltip
                      formatter={(value) => [
                        analyticsMetric === "revenue"
                          ? `$${Number(value).toLocaleString()}`
                          : Number(value).toLocaleString(),
                        metricLabels[analyticsMetric],
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#4f46e5"
                      strokeWidth={3}
                      fill="url(#analyticsGradient)"
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="section analytics-chart-section">
              <div className="analytics-chart-header">
                <div>
                  <h2>
                    Orders Trend
                  </h2>

                  <p>
                    Order activity for{" "}
                    {dateRange.toLowerCase()}.
                  </p>
                </div>

                <div className="chart-legend">
                  <span className="legend-dot orders-dot"></span>
                  Orders
                </div>
              </div>

              <div className="orders-chart">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart
                    data={currentAnalytics.orders.map((value, index) => ({
                      day: analyticsDays[index],
                      orders: value,
                    }))}
                    margin={{ top: 15, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />

                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    <YAxis
                      allowDecimals={false}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    <Tooltip
                      formatter={(value) => [
                        `${Number(value).toLocaleString()} Orders`,
                        "Orders",
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    />

                    <Bar
                      dataKey="orders"
                      fill="#0d9488"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={42}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="section">
              <h2>
                Business Insights
              </h2>

              <p>
                Important observations from
                your business data.
              </p>

              <div className="insight-list">
                <div className="insight">
                  <strong>
                    Revenue is growing
                  </strong>

                  <span>
                    Revenue has increased{" "}
                    {currentData.growth}{" "}
                    compared with the previous
                    period.
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Electronics is the leading
                    category
                  </strong>

                  <span>
                    Electronics currently
                    represents the largest share
                    of category sales.
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Customer activity is
                    increasing
                  </strong>

                  <span>
                    Customer count has continued
                    to increase during the
                    selected period.
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Conversion performance
                  </strong>

                  <span>
                    The current conversion rate
                    is{" "}
                    {currentData.conversion}.
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ================= CUSTOMERS ================= */}

       {activePage === "Customers" && (
  <>
    <div className="topbar">

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() =>
          setMobileSidebarOpen(!mobileSidebarOpen)
        }
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div>
        <h1>
          Customers
        </h1>

                <p>
                  Manage and understand your
                  customer base.
                </p>
              </div>

              <div className="topbar-actions">
                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={() =>
                    setActivePage(
                      "Settings"
                    )
                  }
                >
                  {settings.accountName ||
                    "Admin"}
                </button>
              </div>
            </div>

            <div className="cards">
              <KpiCard
                icon="👥"
                title="Total Customers"
                value={
                  currentData.customers
                }
                trend="+10.7%"
              />

              <KpiCard
                icon="✨"
                title="New Customers"
                value="248"
                trend="+14.2%"
              />

              <KpiCard
                icon="🔄"
                title="Returning Customers"
                value="878"
                trend="+7.8%"
              />

              <KpiCard
                icon="❤️"
                title="Retention Rate"
                value="78.4%"
                trend="+3.2%"
              />
            </div>

            <div className="section customer-table-section">
              <div className="customer-table-header">
                <div>
                  <h2>
                    Customer Directory
                  </h2>

                  <p>
                    Search and manage your
                    customers.
                  </p>
                </div>
              </div>

              <div className="customer-filters">
                <div className="customer-search-box">
                  <span>🔎</span>

                  <input
                    type="text"
                    placeholder="Search customer, email or ID..."
                    value={customerSearch}
                    onChange={(e) =>
                      setCustomerSearch(
                        e.target.value
                      )
                    }
                  />
                </div>

                <select
                  className="customer-filter"
                  value={customerSegment}
                  onChange={(e) =>
                    setCustomerSegment(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Segments
                  </option>
                  <option>VIP</option>
                  <option>Loyal</option>
                  <option>Regular</option>
                  <option>New</option>
                </select>

                <select
                  className="customer-filter"
                  value={customerStatus}
                  onChange={(e) =>
                    setCustomerStatus(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Status
                  </option>
                  <option>Active</option>
                  <option>
                    Inactive
                  </option>
                </select>

                <button
                  className="clear-customer-filters"
                  onClick={
                    clearCustomerFilters
                  }
                >
                  Clear
                </button>
              </div>

              <div className="customer-results-info">
                <span>
                  Showing{" "}
                  <strong>
                    {
                      filteredCustomers.length
                    }
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {customersData.length}
                  </strong>{" "}
                  customers
                </span>
              </div>

              <div className="table-container">
                <table className="customer-table">
                  <thead>
                    <tr>
                      <th>
                        Customer
                      </th>
                      <th>
                        Customer ID
                      </th>
                      <th>
                        Orders
                      </th>
                      <th>
                        Total Spending
                      </th>
                      <th>
                        Last Order
                      </th>
                      <th>
                        Segment
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCustomers.length >
                    0 ? (
                      filteredCustomers.map(
                        (customer) => (
                          <tr
                            key={
                              customer.id
                            }
                          >
                            <td>
                              <div className="customer-profile">
                                <div className="customer-avatar">
                                  {customer.name.charAt(
                                    0
                                  )}
                                </div>

                                <div className="customer-details">
                                  <strong>
                                    {
                                      customer.name
                                    }
                                  </strong>

                                  <span>
                                    {
                                      customer.email
                                    }
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td>
                              <span className="customer-id">
                                {
                                  customer.id
                                }
                              </span>
                            </td>

                            <td>
                              {
                                customer.orders
                              }
                            </td>

                            <td>
                              <strong className="customer-spending">
                                {
                                  customer.spending
                                }
                              </strong>
                            </td>

                            <td>
                              {
                                customer.lastOrder
                              }
                            </td>

                            <td>
                              <span
                                className={getCustomerSegmentClass(
                                  customer.segment
                                )}
                              >
                                {
                                  customer.segment
                                }
                              </span>
                            </td>

                            <td>
                              <span
                                className={getCustomerStatusClass(
                                  customer.status
                                )}
                              >
                                {
                                  customer.status
                                }
                              </span>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="customer-no-results"
                        >
                          <div>
                            <span>
                              🔍
                            </span>

                            <strong>
                              No customers found
                            </strong>

                            <p>
                              Try changing
                              your search
                              or filters.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="section">
              <h2>
                Customer Insights
              </h2>

              <p>
                Important observations about
                your customer base.
              </p>

              <div className="customer-insights">
                <div className="customer-insight-card">
                  <div className="customer-insight-icon">
                    👑
                  </div>

                  <div>
                    <strong>
                      VIP Customers
                    </strong>

                    <span>
                      2 customers are classified
                      as VIP and generate
                      high-value purchases.
                    </span>
                  </div>
                </div>

                <div className="customer-insight-card">
                  <div className="customer-insight-icon">
                    ⭐
                  </div>

                  <div>
                    <strong>
                      Loyal Customers
                    </strong>

                    <span>
                      2 loyal customers continue
                      to make regular purchases.
                    </span>
                  </div>
                </div>

                <div className="customer-insight-card">
                  <div className="customer-insight-icon">
                    🆕
                  </div>

                  <div>
                    <strong>
                      New Customers
                    </strong>

                    <span>
                      2 new customers have
                      recently joined your
                      customer base.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>
                Customer Overview
              </h2>

              <p>
                Customer performance for{" "}
                {dateRange.toLowerCase()}.
              </p>

              <div className="insight-list">
                <div className="insight">
                  <strong>
                    Customer growth
                  </strong>

                  <span>
                    Your customer base currently
                    contains{" "}
                    {currentData.customers}{" "}
                    customers.
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Returning customers
                  </strong>

                  <span>
                    Returning customers
                    contribute significantly to
                    overall sales.
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Retention
                  </strong>

                  <span>
                    Current customer retention
                    rate is 78.4%.
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ================= PRODUCTS ================= */}

       {activePage === "Products" && (
  <>
    <div className="topbar">

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() =>
          setMobileSidebarOpen(!mobileSidebarOpen)
        }
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div>
        <h1>
          Products
        </h1>

                <p>
                  Monitor your products and
                  category performance.
                </p>
              </div>

              <div className="topbar-actions">
                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={() =>
                    setActivePage(
                      "Settings"
                    )
                  }
                >
                  {settings.accountName ||
                    "Admin"}
                </button>
              </div>
            </div>

            <div className="cards">
              <KpiCard
                icon="📦"
                title="Total Products"
                value={
                  productsData.length
                }
                trend="+8.4%"
              />

              <KpiCard
                icon="💰"
                title="Product Revenue"
                value="$67,480"
                trend="+15.6%"
              />

              <KpiCard
                icon="🛒"
                title="Units Sold"
                value="520"
                trend="+12.8%"
              />

              <KpiCard
                icon="⚠️"
                title="Low Stock"
                value="2"
                trend="+4.2%"
              />
            </div>

            <div className="section">
              <h2>
                Product Performance
              </h2>

              <p>
                Top performing product
                categories.
              </p>

              {currentCategories.map(
                (category) => (
                  <div
                    className="category"
                    key={category.name}
                  >
                    <div className="category-info">
                      <strong>
                        {category.name}
                      </strong>

                      <span>
                        {category.value}%
                      </span>
                    </div>

                    <div className="progress">
                      <div
                        style={{
                          width:
                            category.value +
                            "%",
                        }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="section">
              <h2>
                Top Products
              </h2>

              <p>
                Products generating the most
                recent sales.
              </p>

              <div className="transaction">
                <div>
                  <strong>
                    Wireless Headphones
                  </strong>

                  <span>
                    Electronics
                  </span>
                </div>

                <strong>$129</strong>
              </div>

              <div className="transaction">
                <div>
                  <strong>
                    Smart Watch
                  </strong>

                  <span>
                    Electronics
                  </span>
                </div>

                <strong>$199</strong>
              </div>

              <div className="transaction">
                <div>
                  <strong>
                    Office Chair
                  </strong>

                  <span>
                    Home & Garden
                  </span>
                </div>

                <strong>$249</strong>
              </div>

              <div className="transaction">
                <div>
                  <strong>
                    Running Shoes
                  </strong>

                  <span>
                    Sports
                  </span>
                </div>

                <strong>$89</strong>
              </div>
            </div>

            <div className="section product-table-section">
              <div className="product-table-header">
                <div>
                  <h2>
                    Product Directory
                  </h2>

                  <p>
                    Search, filter and analyze
                    your products.
                  </p>
                </div>

                <button
                  className="export-button"
                  onClick={
                    handleProductExport
                  }
                >
                  Export CSV
                </button>
              </div>

              <div className="product-filters">
                <div className="product-search-box">
                  <span>🔎</span>

                  <input
                    type="text"
                    placeholder="Search product, category or ID..."
                    value={productSearch}
                    onChange={(e) =>
                      setProductSearch(
                        e.target.value
                      )
                    }
                  />
                </div>

                <select
                  className="product-filter"
                  value={productCategory}
                  onChange={(e) =>
                    setProductCategory(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Categories
                  </option>
                  <option>
                    Electronics
                  </option>
                  <option>
                    Clothing
                  </option>
                  <option>
                    Home & Garden
                  </option>
                  <option>
                    Sports
                  </option>
                </select>

                <select
                  className="product-filter"
                  value={productStatus}
                  onChange={(e) =>
                    setProductStatus(
                      e.target.value
                    )
                  }
                >
                  <option>
                    All Status
                  </option>
                  <option>
                    In Stock
                  </option>
                  <option>
                    Low Stock
                  </option>
                  <option>
                    Out of Stock
                  </option>
                </select>

                <button
                  className="clear-product-filters"
                  onClick={
                    clearProductFilters
                  }
                >
                  Clear
                </button>
              </div>

              <div className="product-results-info">
                <span>
                  Showing{" "}
                  <strong>
                    {
                      filteredProducts.length
                    }
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {productsData.length}
                  </strong>{" "}
                  products
                </span>
              </div>

              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>
                        Product
                      </th>
                      <th>
                        Product ID
                      </th>
                      <th>
                        Category
                      </th>
                      <th>
                        Price
                      </th>
                      <th>
                        Units Sold
                      </th>
                      <th>
                        Revenue
                      </th>
                      <th>
                        Stock
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredProducts.length >
                    0 ? (
                      filteredProducts.map(
                        (product) => (
                          <tr
                            key={
                              product.id
                            }
                          >
                            <td>
                              <div className="product-profile">
                                <div className="product-avatar">
                                  {product.name.charAt(
                                    0
                                  )}
                                </div>

                                <div className="product-details">
                                  <strong>
                                    {
                                      product.name
                                    }
                                  </strong>

                                  <span>
                                    {
                                      product.category
                                    }
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td>
                              <span className="product-id">
                                {
                                  product.id
                                }
                              </span>
                            </td>

                            <td>
                              {
                                product.category
                              }
                            </td>

                            <td>
                              <strong>
                                $
                                {
                                  product.sales
                                }
                              </strong>
                            </td>

                            <td>
                              {
                                product.units
                              }
                            </td>

                            <td>
                              <strong className="product-revenue">
                                {
                                  product.revenue
                                }
                              </strong>
                            </td>

                            <td>
                              <span className="product-stock">
                                {
                                  product.stock
                                }
                              </span>
                            </td>

                            <td>
                              <span
                                className={getProductStatusClass(
                                  product.status
                                )}
                              >
                                {
                                  product.status
                                }
                              </span>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan="8"
                          className="product-no-results"
                        >
                          <div>
                            <span>
                              🔍
                            </span>

                            <strong>
                              No products found
                            </strong>

                            <p>
                              Try changing
                              your search
                              or filters.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="section">
              <h2>
                Product Insights
              </h2>

              <p>
                Important observations about
                your product performance.
              </p>

              <div className="product-insights">
                <div className="product-insight-card">
                  <div className="product-insight-icon">
                    🏆
                  </div>

                  <div>
                    <strong>
                      Best Selling Product
                    </strong>

                    <span>
                      Smart Watch generated the
                      highest revenue with 67
                      units sold.
                    </span>
                  </div>
                </div>

                <div className="product-insight-card">
                  <div className="product-insight-icon">
                    📦
                  </div>

                  <div>
                    <strong>
                      Inventory Alert
                    </strong>

                    <span>
                      Denim Jacket and Running
                      Shoes are currently running
                      low on stock.
                    </span>
                  </div>
                </div>

                <div className="product-insight-card">
                  <div className="product-insight-icon">
                    📈
                  </div>

                  <div>
                    <strong>
                      Electronics Performance
                    </strong>

                    <span>
                      Electronics contains the
                      strongest group of products
                      in the current catalog.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ================= SETTINGS ================= */}

        {activePage === "Settings" && (
  <>
    <div className="topbar">

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() =>
          setMobileSidebarOpen(!mobileSidebarOpen)
        }
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div>
        <h1>
          Settings
        </h1>

                <p>
                  Manage your dashboard settings
                  and preferences.
                </p>
              </div>

              <div className="topbar-actions">
                <NotificationCenter />

                <button
                  className="profile-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>

            {/* SETTINGS MESSAGE */}

            {settingsMessage && (
              <div
                style={{
                  marginBottom: "20px",
                  padding:
                    "14px 18px",
                  borderRadius: "10px",
                  backgroundColor:
                    settingsMessage.includes(
                      "Unable"
                    )
                      ? "#fee2e2"
                      : "#dcfce7",
                  color:
                    settingsMessage.includes(
                      "Unable"
                    )
                      ? "#991b1b"
                      : "#166534",
                  border:
                    settingsMessage.includes(
                      "Unable"
                    )
                      ? "1px solid #fecaca"
                      : "1px solid #bbf7d0",
                  fontWeight: "600",
                }}
              >
                {settingsMessage}
              </div>
            )}

            {/* ACCOUNT SETTINGS */}

            <div className="section">
              <h2>
                Account Settings
              </h2>

              <p>
                Update your account information.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginTop: "22px",
                }}
              >
                <div>
                  <label
                    style={{
                      display:
                        "block",
                      fontWeight:
                        "600",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Account Name
                  </label>

                  <input
                    type="text"
                    value={
                      settings.accountName
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        "accountName",
                        e.target
                          .value
                      )
                    }
                    style={{
                      width: "100%",
                      padding:
                        "12px 14px",
                      border:
                        "1px solid #d1d5db",
                      borderRadius:
                        "8px",
                      fontSize:
                        "14px",
                      boxSizing:
                        "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display:
                        "block",
                      fontWeight:
                        "600",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={
                      settings.email
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        "email",
                        e.target
                          .value
                      )
                    }
                    style={{
                      width: "100%",
                      padding:
                        "12px 14px",
                      border:
                        "1px solid #d1d5db",
                      borderRadius:
                        "8px",
                      fontSize:
                        "14px",
                      boxSizing:
                        "border-box",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* DASHBOARD PREFERENCES */}

            <div className="section">
              <h2>
                Dashboard Preferences
              </h2>

              <p>
                Customize how your dashboard
                appears.
              </p>

              <div
                style={{
                  marginTop: "22px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Dashboard Name
                </label>

                <input
                  type="text"
                  value={
                    settings.dashboardName
                  }
                  onChange={(e) =>
                    handleSettingsChange(
                      "dashboardName",
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    padding:
                      "12px 14px",
                    border:
                      "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing:
                      "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "24px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    marginBottom:
                      "10px",
                  }}
                >
                  Theme
                </label>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleThemeChange(
                        "Light"
                      )
                    }
                    style={{
                      padding:
                        "11px 20px",
                      borderRadius:
                        "8px",
                      border:
                        settings.theme ===
                        "Light"
                          ? "2px solid #2563eb"
                          : "1px solid #d1d5db",
                      background:
                        settings.theme ===
                        "Light"
                          ? "#eff6ff"
                          : "#ffffff",
                      color:
                        "#111827",
                      cursor:
                        "pointer",
                      fontWeight:
                        "600",
                    }}
                  >
                    ☀️ Light
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleThemeChange(
                        "Dark"
                      )
                    }
                    style={{
                      padding:
                        "11px 20px",
                      borderRadius:
                        "8px",
                      border:
                        settings.theme ===
                        "Dark"
                          ? "2px solid #2563eb"
                          : "1px solid #d1d5db",
                      background:
                        settings.theme ===
                        "Dark"
                          ? "#1f2937"
                          : "#ffffff",
                      color:
                        settings.theme ===
                        "Dark"
                          ? "#ffffff"
                          : "#111827",
                      cursor:
                        "pointer",
                      fontWeight:
                        "600",
                    }}
                  >
                    🌙 Dark
                  </button>
                </div>
              </div>
            </div>

            {/* NOTIFICATION SETTINGS */}

            <div className="section">
              <h2>
                Notification Settings
              </h2>

              <p>
                Choose which business
                notifications you want to
                receive.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: "14px",
                  marginTop: "22px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    gap: "20px",
                    padding: "16px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "4px",
                      }}
                    >
                      Email Notifications
                    </strong>

                    <span
                      style={{
                        fontSize:
                          "13px",
                        color:
                          "#6b7280",
                      }}
                    >
                      Receive important
                      dashboard updates by
                      email.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={
                      settings.emailNotifications
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        "emailNotifications",
                        e.target
                          .checked
                      )
                    }
                    style={{
                      width:
                        "20px",
                      height:
                        "20px",
                      cursor:
                        "pointer",
                    }}
                  />
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    gap: "20px",
                    padding: "16px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "4px",
                      }}
                    >
                      Sales Alerts
                    </strong>

                    <span
                      style={{
                        fontSize:
                          "13px",
                        color:
                          "#6b7280",
                      }}
                    >
                      Get notified when new
                      sales are recorded.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={
                      settings.salesAlerts
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        "salesAlerts",
                        e.target
                          .checked
                      )
                    }
                    style={{
                      width:
                        "20px",
                      height:
                        "20px",
                      cursor:
                        "pointer",
                    }}
                  />
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    gap: "20px",
                    padding: "16px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display:
                          "block",
                        marginBottom:
                          "4px",
                      }}
                    >
                      Low Stock Alerts
                    </strong>

                    <span
                      style={{
                        fontSize:
                          "13px",
                        color:
                          "#6b7280",
                      }}
                    >
                      Receive alerts when
                      product inventory is
                      low.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={
                      settings.lowStockAlerts
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        "lowStockAlerts",
                        e.target
                          .checked
                      )
                    }
                    style={{
                      width:
                        "20px",
                      height:
                        "20px",
                      cursor:
                        "pointer",
                    }}
                  />
                </label>
              </div>
            </div>

            {/* SETTINGS ACTIONS */}

            <div className="section">
              <h2>
                Save Changes
              </h2>

              <p>
                Save your settings or restore
                the default configuration.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  onClick={
                    handleSaveSettings
                  }
                  style={{
                    padding:
                      "12px 22px",
                    border: "none",
                    borderRadius:
                      "8px",
                    background:
                      "#2563eb",
                    color:
                      "#ffffff",
                    fontWeight:
                      "600",
                    cursor:
                      "pointer",
                  }}
                >
                  Save Settings
                </button>

                <button
                  type="button"
                  onClick={
                    handleResetSettings
                  }
                  style={{
                    padding:
                      "12px 22px",
                    border:
                      "1px solid #d1d5db",
                    borderRadius:
                      "8px",
                    background:
                      "#ffffff",
                    color:
                      "#374151",
                    fontWeight:
                      "600",
                    cursor:
                      "pointer",
                  }}
                >
                  Reset Settings
                </button>
              </div>
            </div>

            {/* ACCOUNT SUMMARY */}

            <div className="section">
              <h2>
                Account Summary
              </h2>

              <p>
                Current dashboard account
                information.
              </p>

              <div className="insight-list">
                <div className="insight">
                  <strong>
                    Account Name
                  </strong>

                  <span>
                    {
                      savedSettings.accountName
                    }
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Email
                  </strong>

                  <span>
                    {
                      savedSettings.email
                    }
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Dashboard
                  </strong>

                  <span>
                    {
                      savedSettings.dashboardName
                    }
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Theme
                  </strong>

                  <span>
                    {
                      savedSettings.theme
                    }
                  </span>
                </div>

                <div className="insight">
                  <strong>
                    Account Status
                  </strong>

                  <span>
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* HELP & SUPPORT */}

            <div className="section">
              <h2>
                Help & Support
              </h2>

              <p>
                Need help with BizInsight? Use
                the information below.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "28px",
                      marginBottom:
                        "10px",
                    }}
                  >
                    📚
                  </div>

                  <strong
                    style={{
                      display:
                        "block",
                      marginBottom:
                        "6px",
                    }}
                  >
                    Documentation
                  </strong>

                  <span
                    style={{
                      color:
                        "#6b7280",
                      fontSize:
                        "14px",
                    }}
                  >
                    Review your dashboard
                    configuration and
                    business analytics
                    information.
                  </span>
                </div>

                <div
                  style={{
                    padding: "20px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "28px",
                      marginBottom:
                        "10px",
                    }}
                  >
                    💬
                  </div>

                  <strong
                    style={{
                      display:
                        "block",
                      marginBottom:
                        "6px",
                    }}
                  >
                    Support
                  </strong>

                  <span
                    style={{
                      color:
                        "#6b7280",
                      fontSize:
                        "14px",
                    }}
                  >
                    For support, check your
                    settings and verify your
                    dashboard data
                    configuration.
                  </span>
                </div>

                <div
                  style={{
                    padding: "20px",
                    border:
                      "1px solid #e5e7eb",
                    borderRadius:
                      "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "28px",
                      marginBottom:
                        "10px",
                    }}
                  >
                    ⚙️
                  </div>

                  <strong
                    style={{
                      display:
                        "block",
                      marginBottom:
                        "6px",
                    }}
                  >
                    Configuration
                  </strong>

                  <span
                    style={{
                      color:
                        "#6b7280",
                      fontSize:
                        "14px",
                    }}
                  >
                    Your dashboard preferences
                    are stored locally in your
                    browser.
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
        <footer className="app-footer">
          <p>© 2026 BizInsight. Built with React &amp; Recharts.</p>
          <p>Business Analytics Dashboard | Portfolio Project</p>
        </footer>
      </main>
    </div>
  );
}

export default App;