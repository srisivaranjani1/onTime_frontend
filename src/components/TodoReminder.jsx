


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format, isToday, isTomorrow, parseISO } from "date-fns";

// const TodoReminder = () => {
//   const [meetings, setMeetings] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMeetings = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/meetings/my", {
//           withCredentials: true,
//         });
//         setMeetings(response.data);
//       } catch (err) {
//         console.error("Error fetching meetings with todos:", err);
//         setError("Failed to fetch meetings.");
//       }
//     };

//     fetchMeetings();
//   }, []);

//   const formatDate = (isoString) => {
//     const date = parseISO(isoString);
//     if (isToday(date)) return "Today";
//     if (isTomorrow(date)) return "Tomorrow";
//     return format(date, "dd MMM yyyy");
//   };

//   return (
//     <div className="p-4 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-purple-700 mb-6">Upcoming Meeting Reminders</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {meetings.length === 0 ? (
//         <p className="text-gray-600">No upcoming meetings.</p>
//       ) : (
//         <ul className="space-y-4">
//           {meetings.map((meeting) => (
//             <li
//               key={meeting.id}
//               className="p-4 border border-purple-200 rounded-md bg-purple-50 hover:bg-purple-100 transition"
//             >
//               <div className="text-lg font-semibold">{meeting.title}</div>
//               <div className="text-gray-700">{meeting.description}</div>
//               <div className="text-sm text-gray-600 mt-1">
//                 {formatDate(meeting.startTime)} —{" "}
//                 {format(parseISO(meeting.startTime), "hh:mm a")} to{" "}
//                 {format(parseISO(meeting.endTime), "hh:mm a")}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoReminder;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format, isToday, isTomorrow, parseISO } from "date-fns";
// import "./TodoReminder.css";

// const TodoReminder = () => {
//   const [meetings, setMeetings] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMeetings = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/meetings/my", {
//           withCredentials: true,
//         });
//         setMeetings(response.data);
//       } catch (err) {
//         console.error("Error fetching meetings with todos:", err);
//         setError("Failed to fetch meetings.");
//       }
//     };

//     fetchMeetings();
//   }, []);

//   const formatDate = (isoString) => {
//     const date = parseISO(isoString);
//     if (isToday(date)) return "Today";
//     if (isTomorrow(date)) return "Tomorrow";
//     return format(date, "dd MMM yyyy");
//   };

//   return (
//     <div className="todo-reminder-container">
//       <h2 className="todo-reminder-heading">Upcoming Meeting Reminders</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {meetings.length === 0 ? (
//         <p className="text-gray-400">No upcoming meetings.</p>
//       ) : (
//         <ul>
//           {meetings.map((meeting) => {
//             const start = parseISO(meeting.startTime);
//             const typeClass = isToday(start)
//               ? "todo-today"
//               : isTomorrow(start)
//               ? "todo-tomorrow"
//               : "todo-upcoming";

//             return (
//               <li key={meeting.id} className={`todo-card ${typeClass}`}>
//                 <div className="todo-title">{meeting.title}</div>
//                 <div className="todo-description">{meeting.description}</div>
//                 <div className="todo-time">
//                   {formatDate(meeting.startTime)} —{" "}
//                   {format(start, "hh:mm a")} to{" "}
//                   {format(parseISO(meeting.endTime), "hh:mm a")}
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoReminder;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format, isToday, isTomorrow, parseISO } from "date-fns";
// import "./TodoReminder.css";

// const TodoReminder = () => {
//   const [meetings, setMeetings] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMeetings = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/meetings/my", {
//           withCredentials: true,
//         });
//         setMeetings(response.data);
//       } catch (err) {
//         console.error("Error fetching meetings with todos:", err);
//         setError("Failed to fetch meetings.");
//       }
//     };

//     fetchMeetings();
//   }, []);

//   const formatDate = (isoString) => {
//     const date = parseISO(isoString);
//     if (isToday(date)) return "Today";
//     if (isTomorrow(date)) return "Tomorrow";
//     return format(date, "dd MMM yyyy");
//   };

//   return (
//     <div className="todo-reminder-container">
//       <h2 className="todo-reminder-heading">Upcoming Meeting Reminders</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {meetings.length === 0 ? (
//         <p className="text-gray-400">No upcoming meetings.</p>
//       ) : (
//         <ul>
//           {meetings.map((meeting) => {
//             const start = parseISO(meeting.startTime);
//             const typeClass = isToday(start)
//               ? "todo-today"
//               : isTomorrow(start)
//               ? "todo-tomorrow"
//               : "todo-upcoming";

//             return (
//               <li key={meeting.id} className={`todo-card ${typeClass}`}>
//                 <div className="todo-title">{meeting.title}</div>
//                 <div className="todo-description">{meeting.description}</div>
//                 <div className="todo-time">
//                   {formatDate(meeting.startTime)} —{" "}
//                   {format(start, "hh:mm a")} to{" "}
//                   {format(parseISO(meeting.endTime), "hh:mm a")}
//                 </div>

//                 {/* Todo List */}
//                 {meeting.todos && meeting.todos.length > 0 && (
//                   <ul className="todo-list">
//                     {meeting.todos.map((todo, index) => (
//                       <li key={index} className="todo-item">
//                         ✅ {todo.task}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoReminder;






import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, isToday, isTomorrow, parseISO } from "date-fns";
import "./TodoReminder.css";

const TodoReminder = () => {
  const [meetings, setMeetings] = useState([]);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState({}); // { meetingId: "task content" }

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/meetings/my", {
          withCredentials: true,
        });
        setMeetings(response.data);
      } catch (err) {
        console.error("Error fetching meetings with todos:", err);
        setError("Failed to fetch meetings.");
      }
    };

    fetchMeetings();
  }, []);

  const formatDate = (isoString) => {
    const date = parseISO(isoString);
    if (isToday(date)) return "Today";
    if (isTomorrow(date)) return "Tomorrow";
    return format(date, "dd MMM yyyy");
  };

  const handleAddTodo = async (e, meetingId) => {
    e.preventDefault();
    const task = newTodo[meetingId];
    if (!task?.trim()) return;

    try {
      const response = await axios.post(
        `http://localhost:8080/api/todos`,
        { meetingId, task },
        { withCredentials: true }
      );
      const updatedMeetings = meetings.map((meeting) =>
        meeting.id === meetingId
          ? { ...meeting, todos: [...(meeting.todos || []), response.data] }
          : meeting
      );
      setMeetings(updatedMeetings);
      setNewTodo({ ...newTodo, [meetingId]: "" }); // clear input
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  return (
    <div className="todo-reminder-container">
      <h2 className="todo-reminder-heading">Upcoming Meeting Reminders</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {meetings.length === 0 ? (
        <p className="text-gray-400">No upcoming meetings.</p>
      ) : (
        <ul>
          {meetings.map((meeting) => {
            const start = parseISO(meeting.startTime);
            const typeClass = isToday(start)
              ? "todo-today"
              : isTomorrow(start)
              ? "todo-tomorrow"
              : "todo-upcoming";

            return (
              <li key={meeting.id} className={`todo-card ${typeClass}`}>
                <div className="todo-title">{meeting.title}</div>
                <div className="todo-description">{meeting.description}</div>
                <div className="todo-time">
                  {formatDate(meeting.startTime)} —{" "}
                  {format(start, "hh:mm a")} to{" "}
                  {format(parseISO(meeting.endTime), "hh:mm a")}
                </div>

                {/* Todo List */}
                {meeting.todos && meeting.todos.length > 0 && (
                  <ul className="todo-list">
                    {meeting.todos.map((todo, index) => (
                      <li key={index} className="todo-item">
                        ✅ {todo.task}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Add Todo Form */}
                <form onSubmit={(e) => handleAddTodo(e, meeting.id)} className="todo-form">
                  <input
                    type="text"
                    placeholder="Add new task..."
                    value={newTodo[meeting.id] || ""}
                    onChange={(e) =>
                      setNewTodo({ ...newTodo, [meeting.id]: e.target.value })
                    }
                    className="todo-input"
                  />
                  <button type="submit" className="todo-submit">
                    ➕
                  </button>
                </form>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoReminder;
