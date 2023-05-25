// import * as yup from "yup";

// export const mainFormSchema = yup.object({
//   fullName: yup
//     .string()
//     .required("Name is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(100, "Please enter within 100 characters"),
//   fatherName: yup
//     .string()
//     .required("Father Name is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(100, "Please enter within 100 characters"),
//   cnic: yup
//     .string()
//     .required("CNIC Number is required  without -")
//     .min(13, "Please enter more then 13 characters")
//     .max(13, "Please enter within 13 characters without -"),
//   phoneNumber: yup
//     .string()
//     .required("Phone Number is required")
//     .min(10, "Please enter more then 10 characters")
//     .max(10, "Please enter within 10 characters"),
//   city: yup
//     .string()
//     .required("City is required")
//     .min(2, "Please select your City")
//     .max(45, "Please enter within 45 characters"),
//   email: yup
//     .string()
//     .email("Email is not valid")
//     .required("Email is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(55, "Please enter within 55 characters"),
//   dateOfBirth: yup
//     .date()
//     .max(new Date(), "Invalid date of birth")
//     .test("dateOfBirth", "You must be at least 12 years old", (value: any) => {
//       const currentDate = new Date();
//       const userDate = new Date(value);
//       const age = currentDate.getFullYear() - userDate.getFullYear();
//       if (age > 12) return true;
//       return false;
//     })
//     .typeError("Date of Birth is Required")
//     .required("Date of Birth if Required"),

//   gender: yup.string().required("Gender is required"),
//   highestQualification: yup
//     .string()
//     .required("Qualification is required")
//     .min(2, "Qualification is required"),
// });

// export const experienceSchema = yup.object({
//   title: yup
//     .string()
//     .required("Title is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(40, "Please enter within 40 characters"),
//   industry: yup
//     .string()
//     .required("Industry is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(40, "Please enter within 40 characters"),
//   companyName: yup
//     .string()
//     .required("Company Name is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(40, "Please enter within 40 characters"),
// });

// export const admitCardRequirementsSchema = yup.object({
//   // cnic: yup
//   //   .string()
//   //   .required("CNIC Number is required  without -")
//   //   .min(13, "Please enter more then 13 characters")
//   //   .max(13, "Please enter within 13 characters without -"),
//   // phoneNumber: yup
//   //   .string()
//   //   .required("Phone Number is required")
//   //   .min(10, "Please enter more then 10 characters")
//   //   .max(10, "Please enter within 10 characters"),
//   email: yup
//     .string()
//     .email("Email is not valid")
//     .required("Email is required")
//     .min(3, "Please enter more then 3 characters")
//     .max(55, "Please enter within 55 characters"),
//   // otp: yup
//   //   .string()
//   //   .required("Entry OTP you received")
//   //   .min(6, "Please enter more then 6 characters")
//   //   .max(6, "Please enter within 6 characters"),
// });
