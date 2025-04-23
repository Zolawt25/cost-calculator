import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { AcUnit, Close } from "@mui/icons-material";

export default function AnimatedPopupPage() {
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState("");
  const [acType, setAcType] = useState("");
  const [FurnaceType, setFurnaceType] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [unitCost, setUnitCost] = useState([0, 0]);
  const [installation, setInstallation] = useState([0, 0]);
  const [step, setStep] = useState(1);

  const totalSteps = selected === "Heating" ? 5 : 4;

  const handlePrimaryClick = (type) => {
    setSelected(type);
    setOpen(true);
    setStep(1);
  };

  const handleNextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  const handelAcUnitCost = () => {
    if (capacity === 1.5) {
      setUnitCost([1600, 4800]);
    } else if (capacity === 2) {
      setUnitCost([1600, 7300]);
    } else if (capacity === 2.5) {
      setUnitCost([2100, 7300]);
    } else if (capacity === 3) {
      setUnitCost([2600, 9900]);
    } else {
      setUnitCost(0);
    }
  };

  const handleInstallationCost = () => {
    if (capacity === 1.5) {
      setInstallation([800, 4300]);
    } else if (capacity === 2) {
      setInstallation([1300, 6600]);
    } else if (capacity === 2.5) {
      setInstallation([1900, 6600]);
    } else if (capacity === 3) {
      setInstallation([2500, 8800]);
    } else {
      setInstallation(0);
    }
  };
  useEffect(() => {
    handleInstallationCost();
    handelAcUnitCost();
  }, [finished]);

  const totalCost = [
    installation[0] + unitCost[0],
    installation[1] + unitCost[1],
  ];

  const UnitSystem = () => {
    if (selected === "Heating") {
      return (
        <motion.div
          className="flex flex-wrap justify-center gap-5 px-5"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="outlined"
              className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
              onClick={() => {
                handleNextStep();
                setAcType("Furnace");
              }}
              sx={{
                borderColor: "#66646A",
                borderWidth: "1.8px",
                color: "#211E27",
                textTransform: "capitalize",
              }}
            >
              <img
                src="/ac_calculator_imgs/ac-split-condenser1.png"
                alt="Heating Icon"
                className="w-16 h-16 mb-2"
              />
              Furnace
            </Button>
          </motion.div>
        </motion.div>
      );
    } else if (selected === "Cooling") {
      return (
        <motion.div
          className="flex flex-wrap justify-center gap-5 px-5"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="outlined"
              className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
              onClick={() => {
                handleNextStep();
                setAcType("Central AC");
              }}
              sx={{
                borderColor: "#66646A",
                borderWidth: "1.8px",
                color: "#211E27",
                textTransform: "capitalize",
              }}
            >
              <img
                src="/ac_calculator_imgs/ac-split-condenser1.png"
                alt="Heating Icon"
                className="w-16 h-16 mb-2"
              />
              Central AC
            </Button>
          </motion.div>
        </motion.div>
      );
    }
  };

  const renderStepContent = () => {
    if (selected === "Heating") {
      if (step === 1) {
        return (
          <motion.div>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What type of unit/system do you have?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5 px-5"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  onClick={() => {
                    handleNextStep();
                    setAcType("Furnace");
                  }}
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/ac-split-condenser1.png"
                    alt="Heating Icon"
                    className="w-16 h-16 mb-2"
                  />
                  Furnace
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      } else if (step === 2) {
        return (
          <>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How many storeys is your home?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5 px-5"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={() => {
                    handleNextStep(), setFurnaceType("Electric");
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/1-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  Electric
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={() => {
                    handleNextStep(), setFurnaceType("Gas-Fired");
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/2-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  Gas-Fired
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={() => {
                    handleNextStep(), setFurnaceType("Oil");
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/2-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  Oil
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={() => {
                    handleNextStep(), setFurnaceType("Solid-Fuel Fired");
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/2-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  Solid-Fuel Fired
                </Button>
              </motion.div>
            </motion.div>
          </>
        );
      } else if (step === 3) {
        return (
          <>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How large is your home?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-3 w-full items-center flex-col "
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(1.5);
                  }}
                >
                  less than 1,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(2);
                  }}
                >
                  1,000 - 2,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(2.5);
                  }}
                >
                  2,001 - 3,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(3);
                  }}
                >
                  larger than 3,000 Sq. ft.
                </Button>
              </motion.div>
            </motion.div>
          </>
        );
      } else if (step === 4) {
        return (
          <>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How many storeys is your home?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5 px-5"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={handleNextStep}
                >
                  <img
                    src="/ac_calculator_imgs/1-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  1
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={handleNextStep}
                >
                  <img
                    src="/ac_calculator_imgs/2-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  2+
                </Button>
              </motion.div>
            </motion.div>
          </>
        );
      } else {
        setTimeout(() => {
          setFinished(true);
          handleClose();
        }, 300);
      }
    } else if (selected === "Cooling") {
      if (step === 1) {
        return (
          <motion.div>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What type of unit/system do you have?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5 px-5"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  onClick={() => {
                    handleNextStep();
                    setAcType("Central AC");
                  }}
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                  }}
                >
                  <img
                    src="/ac_calculator_imgs/ac-split-condenser1.png"
                    alt="Heating Icon"
                    className="w-16 h-16 mb-2"
                  />
                  Central AC
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      } else if (step === 2) {
        return (
          <>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How large is your home?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-3 w-full items-center flex-col "
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(1.5);
                  }}
                >
                  less than 1,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(2);
                  }}
                >
                  1,000 - 2,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(2.5);
                  }}
                >
                  2,001 - 3,000 Sq. ft.
                </Button>
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="py-10 border-2 rounded-lg"
                  sx={{
                    color: "#211E27",
                    textTransform: "capitalize",
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "16px",
                      md: "17px", // for desktop
                    },
                    fontWeight: "550",
                    padding: "15px 0px",
                    width: "90%",
                  }}
                  onClick={() => {
                    handleNextStep();
                    setCapacity(3);
                  }}
                >
                  larger than 3,000 Sq. ft.
                </Button>
              </motion.div>
            </motion.div>
          </>
        );
      } else if (step === 3) {
        return (
          <>
            <motion.h2
              className="sm:text-2xl text-lg font-semibold mb-6 text-[#39215c]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              How many storeys is your home?
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5 px-5"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={handleNextStep}
                >
                  <img
                    src="/ac_calculator_imgs/1-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  1
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  className="flex flex-col items-center p-4 border rounded-lg w-36 h-36"
                  sx={{
                    borderColor: "#66646A",
                    borderWidth: "1.8px",
                    color: "#211E27",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "550",
                  }}
                  onClick={handleNextStep}
                >
                  <img
                    src="/ac_calculator_imgs/2-storey-home.png"
                    alt="Heating Icon"
                    className="w-20 h-20 mb-2"
                  />
                  2+
                </Button>
              </motion.div>
            </motion.div>
          </>
        );
      } else {
        setTimeout(() => {
          setFinished(true);
          handleClose();
        }, 300);
      }
    }
  };

  return (
    <div className="flex justify-center bg-[#FBFAFF] ">
      <div className="  w-full lg:p-10 p-5  max-w-[1400px] lg:px-10 px-5 h-full">
        <div>
          <h1 className="sm:text-5xl text-3xl text-[#352157] font-semibold mb-5">
            How Much Does an HVAC Replacement Cost in 2025?
          </h1>
          <p className=" sm:text-lg font-semibold text-gray-800 mb-10">
            Average Cost: $6,775 - $12,130. Use the calculator below for a more
            accurate local estimate.
          </p>
        </div>
        <div className="flex h-full w-full items-center justify-center lg:gap-10">
          {/* Left side content */}
          {finished ? (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center  lg:w-1/2 sm:w-[80%] w-[95%] border bg-white rounded-xl overflow-hidden"
            >
              <div className="p-5 bg-purple-950 w-full flex flex-col mb-8">
                <h2 className="capitalize sm:text-3xl text-[22px] font-semibold text-white">
                  your estimated cost for a{" "}
                  <span className="text-green-200 capitalize">{acType}</span>
                </h2>
                <br />
                <hr className="w-full border-t border-gray-300" />
                <br />
                <div className="*:text-white">
                  <div className="w-full flex items-center justify-between mb-5">
                    <p className="sm:text-2xl text-lg font-semibold">
                      Total Estimate:
                    </p>
                    <p className="sm:text-2xl text-lg font-semibold">
                      ${totalCost[0]?.toLocaleString()} - $
                      {totalCost[1]?.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-1">
                    <p className="sm:text-lg text-sm font-semibold">
                      {selected === "Heating"
                        ? "Size"
                        : "Heating/Cooling Capacity"}
                    </p>
                    <p className="sm:text-lg text-sm font-semibold">
                      {capacity} {selected === "Heating" ? "BTUs" : "tons"}
                    </p>
                  </div>
                  {selected === "Heating" && (
                    <div className="w-full flex items-center justify-between mb-1">
                      <p className="sm:text-lg text-sm font-semibold">
                        Fuel Type
                      </p>
                      <p className="sm:text-lg text-sm font-semibold">
                        {FurnaceType}
                      </p>
                    </div>
                  )}
                  <div className="w-full flex items-center justify-between mb-1">
                    <p className="sm:text-lg text-sm font-semibold">
                      {acType} Unit Cost
                    </p>
                    <p className="sm:text-lg text-sm font-semibold">
                      ${unitCost[0]?.toLocaleString()} - $
                      {unitCost[1]?.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-1">
                    <p className="sm:text-lg text-sm font-semibold ">
                      Installation Cost
                    </p>
                    <p className="sm:text-lg text-sm font-semibold">
                      ${installation[0]?.toLocaleString()} - $
                      {installation[1]?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <Button
                  sx={{
                    // borderColor: "#66646A",
                    // borderWidth: "1.8px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: {
                      xs: "14px", // for mobile
                      sm: "17px",
                      md: "20px", // for desktop
                    },
                    // fontWeight: "550",
                    borderRadius: "50px",
                    bgcolor: "#7e22ce",
                    p: "10px 50px",
                    mb: "10px",
                  }}
                >
                  Find Location contractors
                </Button>
                <button
                  className="border-b border-purple-600 text-purple-600 font-semibold sm:text-lg"
                  onClick={() => {
                    setFinished(false), setAcType(""), setCapacity(0);
                  }}
                >
                  Restart
                </button>
                <br />
                <br />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center sm:p-10 p-5 lg:w-1/2 sm:w-[80%] w-[95%] border bg-white rounded-xl"
            >
              <h1 className="sm:text-2xl text-xl font-semibold text-center mb-6 text-[#39215c]">
                To get started, select which system you need to repair or
                replace
              </h1>
              <div className="flex flex-wrap justify-center gap-5 sm:px-12 px-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outlined"
                    className="flex flex-col items-center p-6 border rounded-lg w-36 h-36"
                    sx={{
                      borderColor: "#66646A",
                      borderWidth: "1.8px",
                      color: "#211E27",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      fontWeight: "550",
                    }}
                    onClick={() => handlePrimaryClick("Heating")}
                  >
                    <img
                      src="/ac_calculator_imgs/heating-icon.png"
                      alt="Heating Icon"
                      className="w-12 h-12 mb-2"
                    />
                    Heating
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outlined"
                    className="flex flex-col items-center p-6 border rounded-lg w-36 h-36"
                    sx={{
                      borderColor: "#66646A",
                      borderWidth: "1.8px",
                      color: "#211E27",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      fontWeight: "550",
                    }}
                    onClick={() => handlePrimaryClick("Cooling")}
                  >
                    <img
                      src="/ac_calculator_imgs/cooling-icon.png"
                      alt="Cooling Icon"
                      className="w-12 h-12 mb-2"
                    />
                    Cooling
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outlined"
                    className="flex flex-col items-center p-6 border rounded-lg w-36 h-36 col-span-2 mx-auto"
                    sx={{
                      borderColor: "#66646A",
                      borderWidth: "1.8px",
                      color: "#211E27",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      fontWeight: "550",
                    }}
                    onClick={() => handlePrimaryClick("Both")}
                  >
                    <AcUnit className="text-purple-600 text-4xl mb-2" />
                    Both
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Right side image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 lg:flex hidden"
            // style={{ backgroundImage: 'url("/ac_bg.svg")' }}
          >
            <img
              src="/ac_calculator_imgs/acBg2.jpg"
              alt=""
              className=" w-[80%] rounded-xl"
            />
          </motion.div>

          {/* MUI Dialog Popup */}
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={false}
            fullWidth
            PaperProps={{
              sx: {
                height: "570px", // You can adjust this value (e.g., '90vh', '600px', etc.)
                maxHeight: "none",
                width: "550px",
                borderRadius: "20px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none", // IE and Edge
                "scrollbar-width": "none", // Firefox
              },
            }}
          >
            <div className="w-full flex justify-center">
              <div className="relative mt-16 w-[80%]">
                <LinearProgress
                  variant="determinate"
                  value={(step / totalSteps) * 100}
                  sx={{
                    height: "8px",
                    borderRadius: "50px",
                    backgroundColor: "#e9d5ff",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#7e22ce",
                    },
                  }}
                />
                <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white bg-purple-700 px-2 py-0.5 rounded-full">
                  {(step / totalSteps) * 100}%
                </span>
                <IconButton
                  onClick={handleClose}
                  className="absolute -top-16 sm:right-[-100%] right-[-90%]"
                >
                  <Close />
                </IconButton>
              </div>
            </div>
            <hr />
            <DialogContent className="flex flex-col items-center text-center mt-4">
              {step <= totalSteps ? (
                renderStepContent()
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">
                    All steps completed!
                  </h2>
                  <Button variant="contained" onClick={handleClose}>
                    Finish
                  </Button>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
