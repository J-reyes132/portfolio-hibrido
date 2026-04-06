<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Experience;

class HomeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'hero' => [
                'title' => 'Building',
                'subtitle' => 'Scalable APIs & Microservices.',
                'description' => 'Senior Backend Engineer & Team Lead specializing in high-performance distributed systems with Node.js, NestJS, and Laravel.',
                'badge' => 'Backend Team Lead @ OGTIC',
                'imageUrl' => 'https://media.licdn.com/dms/image/v2/D4E03AQFQrHd_OdhGvw/profile-displayphoto-shrink_400_400/B4EZaw1kHuHkAg-/0/1746723554284?e=1776902400&v=beta&t=g8UtSQJjITcjKJa1upLpLc9EvgjRtcdAVzgf6nzr6HA',
                'ctaText' => 'View Projects',
                'ctaLink' => '/work',
            ],
            'about' => [
                'name' => 'JUAN MANUEL REYES FELIZ',
                'title' => 'Senior Backend Engineer',
                'description' => 'I am a Senior Backend Engineer and Team Lead with strong experience designing and building scalable backend systems, high-performance APIs, and distributed applications.',
                'fullDescription' => 'Based in Santo Domingo, I specialize in modern backend architectures using Node.js, NestJS, and Laravel. I bridge the gap between complex business requirements and robust, maintainable technical solutions.',
            ],
            'skills' => Skill::where('category', 'programming')->orderBy('order')->get()->map(fn($skill) => [
                'id' => $skill->id,
                'name' => $skill->name,
                'icon' => $skill->icon,
            ]),
            'projects' => Project::orderBy('order')->get()->map(fn($project, $index) => [
                'id' => $project->id,
                'title' => $project->title,
                'description' => $project->description,
                'imageUrl' => $project->image_url,
                'technologies' => $project->technologies,
                'links' => $project->links,
            ]),
            'experience' => Experience::orderBy('order')->take(2)->get()->map(fn($exp) => [
                'id' => $exp->id,
                'title' => $exp->title,
                'company' => $exp->company,
                'period' => $exp->period,
                'description' => $exp->description,
            ]),
        ];
    }
}
