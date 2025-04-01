import React, { useState } from 'react';
import SecureAxioc from '../../Hook/SecureAxios';
const Img_key = import.meta.env.VITE_IMGBB;
const image_hosting = `https://api.imgbb.com/1/upload`;
const ServiccePost = () => {
          
  const axios =SecureAxioc()

      const [formData, setFormData] = useState({
        title: '',
        description: '',
        image:''
      
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const [previewThumbnail, setPreviewThumbnail] = useState(null);
      const [imageFile, setImageFile] = useState(null);
      const handleImageChange1 = (e) => {
  
          const file = e.target.files[0];
          setImageFile(file);
          setPreviewThumbnail(URL.createObjectURL(file)); // For Thumbnail
        };






  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
  
    let imageUrl = "";
  
    if (imageFile) {
        const imageData = new FormData();
        imageData.append("image", imageFile);
  
        try {
            const imgResponse = await fetch(`${image_hosting}?key=${Img_key}`, {
                method: "POST",
                body: imageData,
            });

            const imgData = await imgResponse.json();
            console.log("ImgBB Response:", imgData);
  
            if (imgData.success) {
                imageUrl = imgData.data.url;
           
            } else {
               
                alert("Image upload failed!");
                return;
            }
        } catch (error) {
          
            alert("Image upload failed!");
            return;
        }
    }

    const service = {
      ...formData,
      image:imageUrl
    }
    console.log(service);
    const res = axios.post('/service',service)
    
};




    return (
        <div>
             <form onSubmit={handleSubmit}>
            
             <div className="mb-4">
          <label className="block text-white">Service Title</label>
          <input
            type="text"
            name="title"
             placeholder="Enter Service title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white">Service description </label>
          <textarea
  placeholder="Enter Service description"
  name="description"
  value={formData.description}
  onChange={handleInputChange}
  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
  required
/>

        </div>
        <div className="mt-4">
          <label className="block font-bold">Upload  Image:</label>
          <input
            type="file"
            accept="image"
              placeholder="Enter Service img"
            onChange={handleImageChange1}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewThumbnail && (
            <img
              src={previewThumbnail}
              alt="Thumbnail Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>
        <div>
            <button className='btn btn-info btn-block text-white mt-2'>
                Submite
            </button>
        </div>


             </form>
        </div>
    );
};

export default ServiccePost;