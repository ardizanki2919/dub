import {
  Customer,
  Discount,
  Link,
  Partner,
  ProgramEnrollment,
} from "@dub/prisma/client";

export interface CustomerWithLink extends Customer {
  link?:
    | (Link & {
        programEnrollment?:
          | (ProgramEnrollment & {
              partner: Partner;
              discount: Discount | null;
            })
          | null;
      })
    | null;
}

export const transformCustomer = (customer: CustomerWithLink) => {
  const programEnrollment = customer.link?.programEnrollment;
  return {
    ...customer,
    link: customer.link || null,
    partner: programEnrollment?.partner || null,
    discount: programEnrollment?.discount || null,
  };
};