import { useState } from 'react'
import Upload from '../components/upload'
import Summary from '../components/summary'
import StepperHeader from '../components/header'
import { apiTable } from '../services/api'
import { useToast } from '../hooks/use-toast'

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [files, setFiles] = useState(null)
  const [comparisonData, setComparisonData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleCompare = async (uploadedFiles) => {
    setLoading(true)
    try {
      const result = await apiTable.compareDocuments(
        uploadedFiles.file1,
        uploadedFiles.file2
      )
      setFiles(uploadedFiles)
      setComparisonData(result)
      setCurrentStep(2)
      toast({
        title: "Comparaison réussie",
        description: "Les documents ont été analysés avec succès.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la comparaison des documents."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StepperHeader currentStep={currentStep} />
      <main className="container mx-auto py-8">
        {currentStep === 1 && (
          <Upload 
            onCompare={handleCompare}
            isLoading={loading}
          />
        )}
        <Summary 
          files={files}
          comparisonData={comparisonData}
          currentStep={currentStep}
        />
      </main>
    </div>
  )
}
