import { useState } from 'react'
import './styles.css'
import TopText from './components/TopText'

export default function App() {
  /* Challenge
    
    Dosya girişi henüz tam olarak ayarlanmadı. Göreviniz bunu aşağıdaki gibi tamamlamaktır:
  
    	1. Aşağıdaki 37. satırda yer alan <input /> elementi, zorunlu input olacak şekilde değiştirilmelidir:
        	- gerekli bir input olacak.
        	- kullanıcının aynı anda yüklemek için birden fazla dosya seçmesine izin verir. 
        	- kullanıcının yalnızca pdf, jpg, jpeg veya png dosyalarını seçmesine izin verir. 
        	- Bir sonraki gereksinimde açıklandığı şekilde bir input değişikliği tespit ettiğinde filesToUpload state'ini günceller. 


          
    	2. Kullanıcı yüklenecek dosyaları seçtiğinde, filesToUpload state'i kullanıcının seçtiği her dosya için bir nesne içeren bir array olacak şekilde güncellenmelidir. Her nesne 3 özelliğe sahip olmalıdır: fileName, fileType ve fileSize, değerleri olarak ilgili bilgilerle birlikte. Örneğin: {fileName: "example-file.jpeg", fileType: "image/jpeg", fileSize: 8752474}. 
          
    	3. "Dosya Seç" butonuna tıklayarak ve birden fazla dosya seçerek kodunuzu test edin. " Upload" butonuna tıkladığınızda, filesToUpload state array konsolundaki her nesnenin doğru bilgilerle kaydedildiğini görmelisiniz. (Bunun için kod zaten ayarlanmıştır.) 
	   
	Not: Kodunuzu test etmek için test-files klasöründeki dosyaları kullanabilirsiniz (klasördeki README.md dosyasına bakın). 
       
*/

  const [filesToUpload, setFilesToUpload] = useState([])

  const handleFileChange = (e) => {
    // console.log(e.target.files)
    let newFiles = e.target.files
    // console.log(newFiles)

    const selectedFileName = []
    for(let i = 0; i<newFiles.length; i++){
      // console.log(newFiles[i])
      selectedFileName.push({filenMame: newFiles[i].name, fileType: newFiles[i].type, fileSize: newFiles[i].size})
      
    }

    setFilesToUpload(selectedFileName)
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(filesToUpload)
    filesToUpload.forEach((file) => console.log(file))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TopText />

      <input type='file' accept='image/jpg,image/png, image/jpeg, .pdf' multiple onChange={handleFileChange}/>

      <button>Upload </button>
    </form>
  )
}
