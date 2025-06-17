import React from "react";

const buttonStyles = {
  base: {
    border: "1px solid #ccc",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
    fontSize: "14px",
    color: "white",
  },
  primary: { backgroundColor: "#2563eb", borderColor: "#1d4ed8" },
  danger: { backgroundColor: "#dc2626", borderColor: "#b91c1c" },
  warning: { backgroundColor: "#f59e0b", borderColor: "#d97706" },
  secondary: { backgroundColor: "#6b7280", borderColor: "#4b5563", color: "white" },
  success: { backgroundColor: "#16a34a", borderColor: "#15803d" },
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  style = {},
}) {
  const combinedStyles = {
    ...buttonStyles.base,
    ...buttonStyles[variant],
    ...style,
  };

  return (
    <button type={type} onClick={onClick} style={combinedStyles}>
      {children}
    </button>
  );
}