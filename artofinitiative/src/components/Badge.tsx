const people = [
    {
      name: 'Eindhoven campaign',
      email: 'https://roll20.net/welcome',
      role: 'Dungeon Master',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
      lastSeen: '1w ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tilburg campaign',
        email: 'https://roll20.net/welcome',
        role: 'Player',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        lastSeen: '1w ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Ruined campaign',
        email: 'https://roll20.net/welcome',
        role: 'Dungeon Master',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        lastSeen: '1w ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Problem of dreams campaign',
        email: 'https://roll20.net/welcome',
        role: 'Player',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        lastSeen: null,
        lastSeenDateTime: '2023-01-23T13:23Z',
      }
  ]
  

  export default function Badge() {
    return (
        <ul role="list" className=" border-none border-2   divide-y divide-dashed hover:divide-solid divide-indigo-900  mx-4  ">
            {people.map((person) => (
                <li 
                    key={person.email} 
                    className="mx-2 my-2 border-none flex justify-between gap-x-6 py-5 bg-sky-100 rounded hover:bg-indigo-900 transition-colors duration-300 group  "
                >
                    <div className="flex min-w-0 gap-x-4 mx-3 group-hover:text-white ">
                        <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={person.imageUrl}
                            alt=""
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">
                                {person.name}
                            </p>
                            <a href="https://roll20.net/welcome" className="mt-1 truncate text-xs leading-5 text-gray-500 group-hover:text-white">
                                {person.email}
                            </a>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end mx-5 group-hover:text-white  ">
                        <p className="text-sm leading-6 text-gray-900 group-hover:text-white">
                            {person.role}
                        </p>
                        {person.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-gray-500 group-hover:text-white">
                                Last Played <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500 group-hover:text-white">Active</p>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

