import { motion } from "framer-motion";


const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Other Info</div>
      <input
        type="text"
        placeholder="Highest Qualification"
        value={formData.highestQualification}
        onChange={(e) =>
          setFormData({ ...formData, highestQualification: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={(e) =>
          setFormData({ ...formData, occupation: e.target.value })
        }
      />
      <textarea
        type="text"
        placeholder="About"
        value={formData.about}
        onChange={(e) => setFormData({ ...formData, about: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
          alert("You've successfully submitted this form");
        }}
      >
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
      </button>
    </motion.div>
  );
};

export default OtherInfo;
