<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function index()
    {
        return new ContactResource(null);
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        try {
            // Guardar en la base de datos
            $contact = ContactMessage::create($validated);

            // Opcional: Enviar email de notificación
            // Mail::to('juanreyes1321@outlook.com')->send(new ContactNotification($validated));

            return response()->json([
                'success' => true,
                'message' => 'Message sent successfully',
                'data' => $contact
            ], 201);
        } catch (\Exception $e) {
            Log::error('Contact form error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Error sending message',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
