import { useState } from 'react';
import { TextBox } from '../../Components/UI/TextBox';
import { useNavigate } from 'react-router-dom';
import {API} from "../../Config/Api"
import { AdminLayout } from '../../Components/Layouts/AdminLayout'; // Import the layout

export const Add_Doctor = () => {
  const [doctorName, setDoctorName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [doctorPhone, setDoctorPhone] = useState('');
  const [doctorSpecialization, setDoctorSpecialization] = useState('');
  const [doctorExperience, setDoctorExperience] = useState('');
  const [doctorQualification, setDoctorQualification] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');
  const [doctorAbout, setDoctorAbout] = useState('');
  const [doctorFees, setDoctorFees] = useState('');
  const [doctorEducation, setDoctorEducation] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleAddDoctor = async (e) => {
    e.preventDefault();

    // Create the data object with matching field names
    const doctorData = {
      name: doctorName,
      email: doctorEmail,
      phone: doctorPhone,
      speciality: doctorSpecialization,
      experience: doctorExperience,
      education: doctorQualification,
      password: doctorPassword,
      aboutme: doctorAbout,
      fees: doctorFees,
      address: address,
    };

    try {
      await API.post('/admin/addDoctor', doctorData);
      alert('Doctor added successfully');
      navigate('/admin/doctors');
    } catch (error) {
      console.error('Failed to add doctor:', error);
      alert('Failed to add doctor');
    }
  };

  return (
    <AdminLayout>
      <div className="w-[70%] h-screen pt-10">
        <h1 className="text-2xl font-bold pb-4">Add Doctor</h1>
        <div className="w-full h-full bg-[#f8f9fd] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Upload Doctor Picture</h2>
          <form className="space-y-4">
            <TextBox
              label="Doctor Name"
              placeholder="Enter Doctor Name"
              text={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <TextBox
              label="Doctor Email"
              placeholder="Enter Doctor Email"
              text={doctorEmail}
              onChange={(e) => setDoctorEmail(e.target.value)}
            />
            <TextBox
              label="Doctor Phone"
              placeholder="Enter Doctor Phone"
              text={doctorPhone}
              onChange={(e) => setDoctorPhone(e.target.value)}
            />
            <TextBox
              label="Doctor Fees"
              placeholder="Enter Doctor Fees"
              text={doctorFees}
              onChange={(e) => setDoctorFees(e.target.value)}
            />
            <TextBox
              label="Doctor Education"
              placeholder="Enter Doctor Education"
              text={doctorEducation}
              onChange={(e) => setDoctorEducation(e.target.value)}
            />
            <TextBox
              label="Doctor Address"
              placeholder="Enter Doctor Address"
              text={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextBox
              label="Doctor Specialization"
              placeholder="Enter Doctor Specialization"
              text={doctorSpecialization}
              onChange={(e) => setDoctorSpecialization(e.target.value)}
            />
            <TextBox
              label="Doctor Experience"
              placeholder="Enter Doctor Experience"
              text={doctorExperience}
              onChange={(e) => setDoctorExperience(e.target.value)}
            />
            <TextBox
              label="Doctor Qualification"
              placeholder="Enter Doctor Qualification"
              text={doctorQualification}
              onChange={(e) => setDoctorQualification(e.target.value)}
            />
            <TextBox
              label="Doctor Password"
              placeholder="Enter Doctor Password"
              text={doctorPassword}
              onChange={(e) => setDoctorPassword(e.target.value)}
            />
            <label>About Doctor</label>
            <textarea
              value={doctorAbout}
              onChange={(e) => setDoctorAbout(e.target.value)}
              className="w-full h-20 border-2 border-gray-300 rounded-md p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleAddDoctor}
            >
              Add Doctor
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

