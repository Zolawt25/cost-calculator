import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material"; // or from your custom Button path

const HeatPump = ({
  step,
  handleNextStep,
  setAcType,
  setCapacity,
  setFinished,
  handleClose,
  setHeatPumpTon,
}) => {
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
              className="flex flex-col items-center p-4 border rounded-lg w-40 h-40"
              onClick={() => {
                handleNextStep();
                setAcType("Heat Pump");
              }}
              sx={{
                borderColor: "#66646A",
                borderWidth: "1.8px",
                color: "#211E27",
                fontSize: "17px",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              <img
                src="/ac_calculator_imgs/heatpump.png"
                alt="Heating Icon"
                className="w-24 h-24 mb-2"
              />
              Heat Pump
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
                setCapacity([13000, 1]);
                setHeatPumpTon(1);
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
                setCapacity([7500, 2]);
                setHeatPumpTon(2);
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
                setCapacity([31000, 3]);
                setHeatPumpTon(4);
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
                setCapacity([31000, 4]);
                setHeatPumpTon(4);
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
              className="flex flex-col items-center p-4 border rounded-lg w-40 h-40"
              sx={{
                borderColor: "#66646A",
                borderWidth: "1.8px",
                color: "#211E27",
                textTransform: "capitalize",
                fontSize: "17px",
                fontWeight: "600",
              }}
              onClick={handleNextStep}
            >
              <img
                src="/ac_calculator_imgs/1-storey-home.png"
                alt="Heating Icon"
                className="w-32 h-32 mb-2"
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
              className="flex flex-col items-center p-4 border rounded-lg w-40 h-40"
              sx={{
                borderColor: "#66646A",
                borderWidth: "1.8px",
                color: "#211E27",
                textTransform: "capitalize",
                fontSize: "17px",
                fontWeight: "600",
              }}
              onClick={handleNextStep}
            >
              <img
                src="/ac_calculator_imgs/2-storey-home.png"
                alt="Heating Icon"
                className="w-32 h-32 mb-2"
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
};

export default HeatPump;
