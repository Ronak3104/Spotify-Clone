import React, { useState } from "react";
import { Icon } from "@iconify/react";
import LoggedInContainer from "../containers/LoggedInContainer";

function SpotifySupportPage() {
  const [complaint, setComplaint] = useState("");
  const [activePanel, setActivePanel] = useState(null);

  const handleSubmit = () => {
    if (complaint.trim() === "") {
      alert("Please enter your complaint.");
    } else {
      alert("Complaint submitted successfully!");
      setComplaint("");
    }
  };

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <LoggedInContainer>
      <div className="bg-navbar-black text-white min-h-screen flex flex-col items-center">
        {/* Main content */}
        <main className="w-full max-w-4xl py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Spotify Support
          </h2>
          <p className="text-lg text-center mb-6">How can we help you?</p>

          {/* Complaint text field */}
          <div className="mb-6">
            <textarea
              className="w-full bg-navbar-black p-4 rounded-lg text-white border border-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="Enter your complaint here"
              rows={4}
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center mb-8">
            <button
              className="bg-button-green hover:bg-button-green text-black font-semibold py-2 px-6 rounded-lg transition duration-200"
              onClick={handleSubmit}
            >
              Submit Complaint
            </button>
          </div>

          {/* Accordion */}
          <div className="accordion space-y-4">
            {/* Payments & Billing Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("payments")}
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="ic:baseline-payments" width="24" height="24" />
                  <span>Payments & Billing</span>
                </div>
                <Icon
                  icon={
                    activePanel === "payments"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "payments" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.payments@spotify.com"
                      className="text-green-400"
                    >
                      support.payments@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Account Management Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("account")}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    icon="ic:baseline-manage-accounts"
                    width="24"
                    height="24"
                  />
                  <span>Manage Your Account</span>
                </div>
                <Icon
                  icon={
                    activePanel === "account"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "account" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.account@spotify.com"
                      className="text-green-400"
                    >
                      support.account@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Premium Plans Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("premium")}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    icon="ic:baseline-subscriptions"
                    width="24"
                    height="24"
                  />
                  <span>Premium Plans</span>
                </div>
                <Icon
                  icon={
                    activePanel === "premium"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "premium" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.premium@spotify.com"
                      className="text-green-400"
                    >
                      support.premium@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* In-App Features Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("features")}
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="ic:baseline-apps" width="24" height="24" />
                  <span>In-App Features</span>
                </div>
                <Icon
                  icon={
                    activePanel === "features"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "features" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.features@spotify.com"
                      className="text-green-400"
                    >
                      support.features@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Devices & Troubleshooting Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("devices")}
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="ic:baseline-devices" width="24" height="24" />
                  <span>Devices & Troubleshooting</span>
                </div>
                <Icon
                  icon={
                    activePanel === "devices"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "devices" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.devices@spotify.com"
                      className="text-green-400"
                    >
                      support.devices@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Safety & Privacy Panel */}
            <div className="accordion-item bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="accordion-header flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => togglePanel("privacy")}
              >
                <div className="flex items-center space-x-2">
                  <Icon icon="ic:baseline-privacy-tip" width="24" height="24" />
                  <span>Safety & Privacy</span>
                </div>
                <Icon
                  icon={
                    activePanel === "privacy"
                      ? "ic:baseline-expand-less"
                      : "ic:baseline-expand-more"
                  }
                  width="24"
                  height="24"
                />
              </div>
              {activePanel === "privacy" && (
                <div className="accordion-content p-4 bg-gray-700">
                  <p className="mt-4">
                    For further assistance, you can send an email to{" "}
                    <a
                      href="mailto:support.privacy@spotify.com"
                      className="text-green-400"
                    >
                      support.privacy@spotify.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-black px-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Spotify Support. All Rights Reserved.
          </p>
        </footer>
      </div>
    </LoggedInContainer>
  );
}

export default SpotifySupportPage;
