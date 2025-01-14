import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import RadarChartComponent from './mychart';  // Import le composant radar

const Summary = ({ files, comparisonData, currentStep }) => {
  // Ne montrer le composant que si nous sommes à l'étape 2
  if (currentStep !== 2) return null;

  return (
    <div className="space-y-6">
      <RadarChartComponent />
      
      <Card>
        <CardHeader>
          <CardTitle>Comparison Results</CardTitle>
        </CardHeader>
        <CardContent>
          {comparisonData && (
            <pre className="text-sm">{JSON.stringify(comparisonData, null, 2)}</pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;
