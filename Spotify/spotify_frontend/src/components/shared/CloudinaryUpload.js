import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "ddnm9smrs",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            
            function (error, result){
                if(!error && result.event === "success"){
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                }
                else{
                    if(error){
                    console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button className="bg-button-green rounded-full p-4 font-semibold" onClick={uploadImageWidget}>
            Select Track
        </button>
    )
}
export default CloudinaryUpload;