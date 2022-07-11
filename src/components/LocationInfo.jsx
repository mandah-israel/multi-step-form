import { motion } from "framer-motion";


const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Location Info</div>

      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
      />
      
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
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

export default LocationInfo;
