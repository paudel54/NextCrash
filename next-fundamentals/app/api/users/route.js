// Acts as api backend route
// Next.js supports following HTTP methods process st forward.

// HTTP methods
// GET => Retrives data or resources from server
// POST => Submit data to server to Create new Resources
// PUT => Updates or replaces existing resources on server
// PATCH => Partially updates an existing resources on server
// DELETE => Removes Specific resources from the Server
// HEAD => Retrives the header of a resources without fetching its body.
// OPTIONS => Retrives the supported  HTTP methods and other Communication options for a resource.

// Backend  implementations easy way form nextJS

export async function GET(request) {
    // handle GET request for /api/users
    // retrives users from db or any data resources
    const users = [
        { id: 1, name: 'Ram' },
        { id: 2, name: 'Suresh' },
        { id: 3, name: 'Pemba' }

    ];

    return new Response(JSON.stringify(users));
}