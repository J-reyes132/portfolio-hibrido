<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Experience;

class ExperienceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'header' => [
                'badge' => 'Professional Path',
                'title' => 'Engineering',
                'highlight' => 'Reliability.',
                'description' => 'A chronological journey through backend architecture, high-scale systems, and technical leadership in the public and private sectors.',
            ],
            'roles' => Experience::orderBy('order')->get(),
            'cta' => [
                'title' => 'Want the full history?',
                'description' => 'I\'m always open to discussing my professional journey or how my backend expertise can help your organization scale.',
                'primaryButtonText' => 'Download CV',
                'secondaryButtonText' => 'View LinkedIn',
            ],
        ];
    }
}
