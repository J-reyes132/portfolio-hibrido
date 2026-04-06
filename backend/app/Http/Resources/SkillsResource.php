<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Skill;

class SkillsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'hero' => [
                'title' => 'Technical',
                'subtitle' => 'Precision & Creative Flow.',
                'description' => 'My toolkit is a blend of backend architecture, performance-oriented engineering, and scalable systems design. I build robust digital foundations that feel effortless.',
                'quote' => '"Simplicity is the ultimate sophistication, achieved through relentless technical refinement."',
                'quoteAuthor' => 'Focusing on high-performance architecture & clean system design.',
            ],
            'programmingLanguages' => Skill::where('category', 'programming')->orderBy('order')->pluck('name'),
            'coreCompetencies' => Skill::where('category', 'competency')->orderBy('order')->pluck('name'),
            'backendDevops' => Skill::where('category', 'backend')->orderBy('order')->pluck('name'),
            'databases' => Skill::where('category', 'database')->orderBy('order')->pluck('name'),
            'engineering' => Skill::where('category', 'engineering')->orderBy('order')->pluck('name'),
        ];
    }
}
