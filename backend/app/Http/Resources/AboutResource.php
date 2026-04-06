<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Education;
use App\Models\Philosophy;
use App\Models\PersonalItem;

class AboutResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'hero' => [
                'badge' => 'Senior Backend Engineer',
                'title' => 'Juan Manuel',
                'lastName' => 'Reyes Feliz',
                'description' => 'Specialized in Node.js, NestJS, and Laravel. I focus on crafting scalable APIs and robust microservices architectures that power seamless digital experiences.',
                'location' => 'Based in Santo Domingo, Working Globally.',
                'imageUrl' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOxcpNDF-FJzCqRMix9CUTfdIN5FcSxBev6nGn-kfB6eTPNiTbILOYLXnluTqzMqTnwEFB578elErx9Fcczj9ayhMI2tBAQ3reFX1NyCWRq4GQJLTBA1YhgLUDr9ag4Fl5QKT4tHftQAYDs080Uef2mZpNxvgYUnTg6MkI8lLDcTHGNJpuGPs88na9KyWT1iUnILYMwYSxUSzgqUYfEKuvkHLTQcnIkp1tjqFkbzvAUN4Hrl4Enuoz_pv6dUBPMblUYsQXGGy6rIuE',
            ],
            'education' => Education::orderBy('order')->get(),
            'philosophy' => Philosophy::orderBy('order')->get(),
            'personal' => PersonalItem::orderBy('order')->get(),
            'cta' => [
                'title' => 'Ready to build your next',
                'highlightText' => 'Digital Architecture?',
                'primaryButtonText' => 'Let\'s Connect',
                'secondaryButtonText' => 'Download CV',
            ],
        ];
    }
}
