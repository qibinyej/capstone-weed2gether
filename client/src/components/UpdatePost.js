// import React, { useState } from "react";

// function UpdatePost({ onePost }) {
//   console.log(onePost);
//   //update user posts
//   const [updateTitle, setUpdateTitle] = useState("");
//   const [updatePostBody, setUpdatePostBody] = useState("");

//   const handleUpdate = (post) => {
//     fetch(`/me/${post.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: updateTitle,
//         postBody: updatePostBody,
//       }),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(data);
//         setUpdateTitle(updateTitle);
//         setUpdatePostBody(updatePostBody);
//       });
//   };

//   return (
//     <div>
       
//       <form onSubmit={handleUpdate} className="mt-10 px-10">
//         <label
//           htmlFor="post_title"
//           className="block text-sm font-medium text-gray-700"
//         >
//           <input
//             onChange={(e) => setUpdateTitle(e.target.value)}
//             type="text"
//             value={updateTitle}
//             placeholder="Title"
//             className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block sm:text-sm border border-gray-300 rounded-md"
//           />
//         </label>

//         <label
//           htmlFor="post_body"
//           className="w-full text-sm font-medium text-gray-700"
//         >
//           <div className="mt-1">
//             <textarea
//               onChange={(e) => setUpdatePostBody(e.target.value)}
//               type="text"
//               value={updatePostBody}
//               placeholder="Write something..."
//               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//             />
//           </div>
//         </label>
//         <button
//           type="submit"
//           value="Submit"
//           className="mt-2 float-left bg-white border border-gray-400 rounded-lg py-1 px-2 flex items-center justify-center text-sm font-sm text-black hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default UpdatePost;
