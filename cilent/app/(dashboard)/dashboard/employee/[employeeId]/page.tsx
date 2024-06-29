import BreadCrumb from '@/components/breadcrumb';
import { ProductForm } from '@/components/forms/product-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export default function Page() {
  const breadcrumbItems = [
    { title: 'Employee', link: '/dashboard/employee' },
    { title: 'Create', link: '/dashboard/employee/create' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <BreadCrumb items={breadcrumbItems} />
        <ProductForm
          categories={[
            { _id: 'Utilities', name: 'Utilities' },
            { _id: 'Health care', name: 'Health care' },
            { _id: 'Insurance', name: 'Insurance' },
            { _id: 'Transportation', name: 'Transportation' },
            { _id: 'Debt', name: 'Debt' },
            { _id: 'EMI', name: 'EMI' },
            { _id: 'Entertainment', name: 'Entertainment' },
            { _id: 'Travel', name: 'Travel' },
            { _id: 'Food', name: 'Food' }
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
