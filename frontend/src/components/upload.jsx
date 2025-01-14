import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, FileType, X, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Upload = ({ onCompare, isLoading }) => {
  const [files, setFiles] = useState({
    file1: null,
    file2: null
  });
  const [errors, setErrors] = useState({
    file1: '',
    file2: ''
  });

  const validateFile = (file) => {
    if (!file) return "Please select a file";
    if (file.type !== "application/pdf") return "Only PDF files are allowed";
    if (file.size > 5 * 1024 * 1024) return "File size should be less than 5MB";
    return "";
  };

  const handleFileChange = (event, fileNumber) => {
    const file = event.target.files[0];
    const error = validateFile(file);
    
    setErrors(prev => ({
      ...prev,
      [fileNumber]: error
    }));

    if (!error) {
      setFiles(prev => ({
        ...prev,
        [fileNumber]: file
      }));
    }
  };

  const removeFile = (fileNumber) => {
    setFiles(prev => ({
      ...prev,
      [fileNumber]: null
    }));
    setErrors(prev => ({
      ...prev,
      [fileNumber]: ''
    }));
  };

  const handleCompare = () => {
    if (files.file1 && files.file2) {
      onCompare(files);
    }
  };

  const FileUploadZone = ({ fileNumber, file, error }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-2">
        File {fileNumber.replace('file', '')}
      </label>
      
      {!file ? (
        <div className="border-2 border-dashed rounded-lg p-6 hover:border-purple-500 transition-colors">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, fileNumber)}
            className="hidden"
            id={fileNumber}
          />
          <label
            htmlFor={fileNumber}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <UploadIcon className="h-8 w-8 text-gray-400" />
            <span className="text-sm text-gray-500">Click to upload PDF</span>
            <span className="text-xs text-gray-400">Max size: 5MB</span>
          </label>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <FileType className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFile(fileNumber)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Importer les tableaux de garantie</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FileUploadZone
          fileNumber="file1"
          file={files.file1}
          error={errors.file1}
        />
        <FileUploadZone
          fileNumber="file2"
          file={files.file2}
          error={errors.file2}
        />

        <div className="pt-4">
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-6 text-lg"
            disabled={!files.file1 || !files.file2 || errors.file1 || errors.file2 || isLoading}
            onClick={handleCompare}
            variant="default"
            size="lg"
          >
            {isLoading ? "Comparaison en cours..." : "Comparer les documents"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Upload;
